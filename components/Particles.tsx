import ParticlesWrapper from "react-tsparticles";

const Particles = () => {
  return (
    <ParticlesWrapper
      id="tsparticles"
      options={{
        autoPlay: true,
        detectRetina: true,
        duration: 0,
        fpsLimit: 60,
        manualParticles: [],
        motion: {
          disable: false,
          reduce: {
            factor: 4,
            value: true,
          },
        },
        particles: {
          shadow: {
            enable: true,
            color: "#00FFFF",
            blur: 15,
          },
          bounce: {
            horizontal: {
              random: {
                enable: false,
                minimumValue: 0.7,
              },
              value: 1,
            },
            vertical: {
              random: {
                enable: false,
                minimumValue: 0.1,
              },
              value: 1,
            },
          },
          color: {
            value: "#9BF9FF",
            animation: {
              h: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
              },
              s: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
              },
              l: {
                count: 0,
                enable: false,
                offset: 0,
                speed: 1,
                sync: true,
              },
            },
          },
          gradient: [],
          groups: {},
          life: {
            count: 0,
            delay: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              sync: false,
            },
            duration: {
              random: {
                enable: false,
                minimumValue: 0.0001,
              },
              value: 0,
              sync: false,
            },
          },
          move: {
            attract: {},
            decay: 0,
            distance: {},
            direction: "bottom",
            drift: 0,
            enable: true,
            gravity: {
              acceleration: 9.81,
              enable: true,
              inverse: false,
              maxSpeed: 0.2,
            },
            path: {
              clamp: false,
              enable: false,
              options: {},
            },
            random: true,
            size: false,
            speed: 0.2,
            straight: false,
            trail: {
              enable: false,
              length: 0.4,
              fillColor: {
                value: "#00FFFF",
              },
            },
            vibrate: false,
            warp: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
              factor: 1000,
            },
            limit: 0,
            value: 60,
          },
          opacity: {
            random: {
              enable: true,
              minimumValue: 0.1,
            },
            value: {
              min: 0,
              max: 9,
            },
            animation: {
              count: 0,
              enable: true,
              speed: 1,
              sync: false,
              destroy: "none",
              minimumValue: 0,
            },
          },
          reduceDuplicates: false,
          shape: {
            type: "circle",
          },
          size: {
            random: {
              enable: true,
              minimumValue: 1,
            },
            value: {
              min: 1,
              max: 2,
            },
            animation: {
              count: 0,
              enable: false,
              speed: 4,
              sync: false,
              destroy: "none",
              startValue: "random",
              minimumValue: 0.3,
            },
          },
          stroke: {
            width: 0,
          },
          zIndex: {
            random: {
              enable: false,
              minimumValue: 0,
            },
            value: 0,
            opacityRate: 1,
            sizeRate: 1,
            velocityRate: 1,
          },
        },
        pauseOnOutsideViewport: true,
        responsive: [],
        themes: [],
        zLayers: 100,
      }}
    />
  );
};

export default Particles;
