/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      textShadow: {
        'default': '0 2px 5px rgba(0, 0, 0, 0.5)',
      },
      backgroundImage: {
        search:
          "url('https://s3-alpha-sig.figma.com/img/95a0/f5fc/96ca735c9a72a2c6703970a518c4d6b5?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=izHh6Q87H9RW6sV5sct~OfckN7iH~tgo1vwUk2PXd7UeBbm8VOvDOstMB381C~Dc~5~KKWXzuc4L9G718ClV~oe2fAFVBP7H-ChhFIL3QnoKlPW0bCwNxNKkgLfKaVhcf-xzcZDLNq6sydKrAKvvbB-hFrinroPYxc14jnVrhvuLN4VljVdnOSPIXJ1nkymInUJ7802~jOFOtSJRc~fAcyTrFbMLw9vgtNKYvNOUJtSQNSdtvot9IbnAC1x1gkysnArOAxqNrY3czVEp4PIdpGUjmkXolpNkqGwSfdV0W2lSc03Xsh9LuIlQV9bhe3tTSG5s3JkWBjkkhR6rgwHxnA__')",
        quote:
          "url('https://s3-alpha-sig.figma.com/img/c5e5/e24c/44e231209353212bbefc2adf039d6916?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hiulLpvHaCUbYztX210j51GyG-dFYg97VpdO0OsEQ1JmrhOgFj9uD-L8-KhTRK1xgHiDZ8OG9z2HnP4--aItD6btd1yeej9zrWMFH5pw5K6v1t5BVcNmXAqa3Y0ZGMixLbDykaJCaB20sc0uUKkAjuy61qsS4pzMeW35YeqUZl1Hpr7r4DQ~1XzFhFhoikom9uPUCTvoJ6G9eB4FVBTr~TESEngScrkfjkvooLmDD~OLt1fkbg6~qGE7zh2OtJ-miYfJcC5GR~u582OwRH3ylYfmCoP6KO0uN8eFbHOYc7YJXI0yEn6nx10JhvfXhPDbcSWKRCUflMQ4akx2jj0MrQ__')"
      },
      boxShadow: {
        custom: "0 3px 5px 0 rgba(0, 0, 0, 0.8)",
        'inner-md': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'inner-lg': 'inset 0 10px 15px -3px rgba(0, 0, 0, 0.1)',
,
        button: "3.8px 3.8px 0px 0px #20E9C1"
      },
      dropShadow:{
        custom: "0px 4px 2px rgba(0, 0, 0, 0.75)",
      },
      colors: {
        backgroundColor: "#0A171E",
        aquaMarine: "#20E9C1",
        dark: "#172935",
        lightTurquoise: "#87EED9",
        riverBed: "#41515B",
        offwhite: "#FFF8F8",
        dashboardText: "#CBD0CF"
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
