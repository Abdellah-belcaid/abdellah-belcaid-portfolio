import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-fit h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: true },
        background: {
          color: {
            value: "",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 20,

            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            grab: {
              distance: 400,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 400,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
          },
        },
        particles: {
          color: {
            value: [
              "#e68e2e",
              "#4287f5",
              "#ff3399",
              "#00cc66",
              "#ff9900",
              "#9933cc",
            ],
          },
          links: {
            color: {
              value: [
                "#e68e2e",
                "#4287f5",
                "#ff3399",
                "#00cc66",
                "#ff9900",
                "#9933cc",
              ],
            },
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
            options: {
              sides: 5,
            },
          },
          rotate: {
            value: 0,
            random: true,
            direction: "clockwise",
            animation: {
              enable: true,
              speed: 5,
              sync: false,
            },
          },
          size: {
            value: { min: 1, max: 10 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;
