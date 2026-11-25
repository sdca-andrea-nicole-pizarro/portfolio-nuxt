<script setup lang="ts">
// A light-blue network of dots that drifts on its own, links nearby dots,
// connects to your cursor and scatters when you click. It is decorative only,
// pauses when the tab is hidden and stays still if reduced motion is on.
const canvasRef = ref<HTMLCanvasElement | null>(null)

type Dot = { x: number; y: number; vx: number; vy: number; bx: number; by: number; r: number }

let cleanup: (() => void) | null = null

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas?.getContext('2d')
  if (!canvas || !ctx) return

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const COLOR = '46, 139, 208'
  const LINK_DISTANCE = 130
  const POINTER_DISTANCE = 180
  const REPEL_DISTANCE = 110

  let dots: Dot[] = []
  let width = 0
  let height = 0
  let frame = 0
  const pointer = { x: -1000, y: -1000 }

  const seed = () => {
    const count = Math.min(120, Math.max(30, Math.round((width * height) / 16000)))
    dots = Array.from({ length: count }, () => {
      const bx = (Math.random() - 0.5) * 0.35
      const by = (Math.random() - 0.5) * 0.35
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: bx,
        vy: by,
        bx,
        by,
        r: 1.2 + Math.random() * 1.6,
      }
    })
  }

  const draw = () => {
    ctx.clearRect(0, 0, width, height)

    for (let i = 0; i < dots.length; i++) {
      const a = dots[i]!
      for (let j = i + 1; j < dots.length; j++) {
        const b = dots[j]!
        const dist = Math.hypot(a.x - b.x, a.y - b.y)
        if (dist < LINK_DISTANCE) {
          ctx.strokeStyle = `rgba(${COLOR}, ${(1 - dist / LINK_DISTANCE) * 0.28})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(a.x, a.y)
          ctx.lineTo(b.x, b.y)
          ctx.stroke()
        }
      }
    }

    for (const d of dots) {
      ctx.fillStyle = `rgba(${COLOR}, 0.55)`
      ctx.beginPath()
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
      ctx.fill()

      const dist = Math.hypot(d.x - pointer.x, d.y - pointer.y)
      if (dist < POINTER_DISTANCE) {
        ctx.strokeStyle = `rgba(${COLOR}, ${(1 - dist / POINTER_DISTANCE) * 0.5})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(d.x, d.y)
        ctx.lineTo(pointer.x, pointer.y)
        ctx.stroke()
      }
    }
  }

  const step = () => {
    for (const d of dots) {
      const dx = d.x - pointer.x
      const dy = d.y - pointer.y
      const dist = Math.hypot(dx, dy)
      if (dist > 0 && dist < REPEL_DISTANCE) {
        const force = (1 - dist / REPEL_DISTANCE) * 0.2
        d.vx += (dx / dist) * force
        d.vy += (dy / dist) * force
      }
      // Ease back to the dot's own drift speed after being pushed.
      d.vx += (d.bx - d.vx) * 0.02
      d.vy += (d.by - d.vy) * 0.02
      d.x += d.vx
      d.y += d.vy

      if (d.x < -10) d.x = width + 10
      if (d.x > width + 10) d.x = -10
      if (d.y < -10) d.y = height + 10
      if (d.y > height + 10) d.y = -10
    }
  }

  const loop = () => {
    step()
    draw()
    frame = requestAnimationFrame(loop)
  }

  const start = () => {
    if (!reduceMotion && !frame) frame = requestAnimationFrame(loop)
  }

  const stop = () => {
    cancelAnimationFrame(frame)
    frame = 0
  }

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2)
    width = window.innerWidth
    height = window.innerHeight
    canvas.width = width * ratio
    canvas.height = height * ratio
    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    seed()
    draw()
  }

  const onMove = (event: PointerEvent) => {
    pointer.x = event.clientX
    pointer.y = event.clientY
  }

  const onLeave = () => {
    pointer.x = -1000
    pointer.y = -1000
  }

  const onUp = (event: PointerEvent) => {
    if (event.pointerType === 'touch') onLeave()
  }

  const onDown = (event: PointerEvent) => {
    for (const d of dots) {
      const dx = d.x - event.clientX
      const dy = d.y - event.clientY
      const dist = Math.hypot(dx, dy)
      if (dist > 0 && dist < 220) {
        const force = (1 - dist / 220) * 4
        d.vx += (dx / dist) * force
        d.vy += (dy / dist) * force
      }
    }
  }

  const onVisibility = () => (document.hidden ? stop() : start())

  resize()
  window.addEventListener('resize', resize)
  if (!reduceMotion) {
    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    document.addEventListener('pointerleave', onLeave)
    document.addEventListener('visibilitychange', onVisibility)
    start()
  }

  cleanup = () => {
    stop()
    window.removeEventListener('resize', resize)
    window.removeEventListener('pointermove', onMove)
    window.removeEventListener('pointerdown', onDown)
    window.removeEventListener('pointerup', onUp)
    document.removeEventListener('pointerleave', onLeave)
    document.removeEventListener('visibilitychange', onVisibility)
  }
})

onBeforeUnmount(() => cleanup?.())
</script>

<template>
  <canvas ref="canvasRef" aria-hidden="true" class="pointer-events-none fixed inset-0 -z-10" />
</template>
