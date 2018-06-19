export const parallaxData = {
  left: [
    {
      start: 0,
      duration: 1000,
      // easing: [0.25, 0.1, 0.53, 3],
      properties: [
        {
          startValue: 300,
          endValue: -300,
          property: "translateY"
        },
        {
          startValue: -250,
          endValue: -200,
          property: "translateX"
        },
        {
          startValue: 0,
          endValue: 360,
          property: "rotate"
        },
      ]
    }
  ],
  right: [
    {
      start: 0,
      duration: 1000,
      easing: [0.25, 0.1, 0.53, 3],
      properties: [
        {
          startValue: -100,
          endValue: 100,
          property: "translateY"
        },
        {
          startValue: -200,
          endValue: 50,
          property: "translateX"
        }
      ]
    }
  ],
  leftAlt: [
    {
      start: 0,
      duration: 1000,
      // easing: [0.25, 0.1, 0.53, 3],
      properties: [
        {
          startValue: 300,
          endValue: -400,
          property: "translateY"
        },
        {
          startValue: 0,
          endValue: 50,
          property: "translateX"
        },
        {
          startValue: 0,
          endValue: 450,
          property: "rotate"
        },
      ]
    }
  ],
  leftAltAlt: [
    {
      start: 0,
      duration: 2000,
      // easing: [0.25, 0.1, 0.53, 3],
      properties: [
        {
          startValue: 400,
          endValue: -400,
          property: "translateY"
        },
        {
          startValue: -450,
          endValue: -200,
          property: "translateX"
        },
        {
          startValue: 0,
          endValue: 270,
          property: "rotate"
        },
      ]
    }
  ],
}
    