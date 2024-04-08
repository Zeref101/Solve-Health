/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        search:
          "url('https://s3-alpha-sig.figma.com/img/95a0/f5fc/96ca735c9a72a2c6703970a518c4d6b5?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=izHh6Q87H9RW6sV5sct~OfckN7iH~tgo1vwUk2PXd7UeBbm8VOvDOstMB381C~Dc~5~KKWXzuc4L9G718ClV~oe2fAFVBP7H-ChhFIL3QnoKlPW0bCwNxNKkgLfKaVhcf-xzcZDLNq6sydKrAKvvbB-hFrinroPYxc14jnVrhvuLN4VljVdnOSPIXJ1nkymInUJ7802~jOFOtSJRc~fAcyTrFbMLw9vgtNKYvNOUJtSQNSdtvot9IbnAC1x1gkysnArOAxqNrY3czVEp4PIdpGUjmkXolpNkqGwSfdV0W2lSc03Xsh9LuIlQV9bhe3tTSG5s3JkWBjkkhR6rgwHxnA__')",
      },
      boxShadow: {
        custom: "0 2px 5px 0 rgba(0, 0, 0, 0.5)",
      },
      colors: {
        backgroundColor: "#0A171E",
        aquaMarine: "#20E9C1",
        dark: "#172935",
        lightTurquoise: "#87EED9",
        riverBed: "#41515B",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", width: "0" },
          "100%": { opacity: "1", width: "100%" },
        },
      },
      animation: {
        fadeOut: "fadeOut 0.5s ease 1s 1 both",
        fadeIn: "fadeIn 1s ease 2s 1 both",
      },
    },
  },
  plugins: [],
};
