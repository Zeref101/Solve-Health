/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

      textShadow: {
        default: "0 2px 5px rgba(0, 0, 0, 0.5)",
      },
      backgroundImage: {
        pass: "url('https://s3-alpha-sig.figma.com/img/cbe0/157c/5425d720c1cc1e8dabc0f9aeb3409bdb?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QZ6XsBB6VrXZTAfY~HjXZ3bR-MOGTFwuECCav-~DkjwgDZ-pr2dVoxYLbVmWHF6NTWPqR~8OjoD8NMJZjzYKGL37e~c9k-Eb4inx7tLYfx8oBgIVtF2wrgvtgEXhQLxpC0NAY6tJ3cynpyhcMAaRXzvgLS93I6ZsZZDaR~nJQofV42GGjJ23IcAnfkuNSJD2Hel3WVPbVJpGOpodNryLSbjak1rfTctKDdap4qyOx3hJZS5e1ik6ur9ND~EgWibCMMLKrMiMYT5JZsIlvvhewIEWk3y9VvGJ48UDKfi6GVpBQ4ZhXlLLpKy074Ehiy9749wt23KO4PnynyIOF0hAPw__')",
        email:
          "url('https://s3-alpha-sig.figma.com/img/d614/690c/05c8267a68a7588ad241a661a34f76fb?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HLeMyxpvLDaduHgPKeJWxqOZFSQ5~CbMZYOZlFc4CHqk4coUwFXlGgdXj9E7SfYhc5W048t~H1ID7RZgQCIwRLl558hXGLdgFJ2V5MSVksIhJ-6X1wd7HedGMs8zS7r9xz4mcwsckJDQ~TNcOH8dutbxh4WKeAzOzIqnpA2hh0etM6Bq2Vvs6yagbLfp5qdvpcKVfx3xtnauNONEMXYULjBKDqUiojFAnY1ix6mdXTs1gFwDlVadyEvTOaQXjHegT7FmpOLAUgsMv4O4uX2Qwmj7SWGrR36TgA-YIfJ7b7WgW9ClIzog2~V0v7KtI316SimlPibD3B3c8jaTO5Qurg__')",
        quote:
          "url('https://s3-alpha-sig.figma.com/img/c5e5/e24c/44e231209353212bbefc2adf039d6916?Expires=1713744000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hiulLpvHaCUbYztX210j51GyG-dFYg97VpdO0OsEQ1JmrhOgFj9uD-L8-KhTRK1xgHiDZ8OG9z2HnP4--aItD6btd1yeej9zrWMFH5pw5K6v1t5BVcNmXAqa3Y0ZGMixLbDykaJCaB20sc0uUKkAjuy61qsS4pzMeW35YeqUZl1Hpr7r4DQ~1XzFhFhoikom9uPUCTvoJ6G9eB4FVBTr~TESEngScrkfjkvooLmDD~OLt1fkbg6~qGE7zh2OtJ-miYfJcC5GR~u582OwRH3ylYfmCoP6KO0uN8eFbHOYc7YJXI0yEn6nx10JhvfXhPDbcSWKRCUflMQ4akx2jj0MrQ__')",
      },
      boxShadow: {
        custom: "0 3px 5px 0 rgba(0, 0, 0, 0.8)",
        "inner-md": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        "inner-lg": "inset 0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        button: "3.8px 3.8px 0px 0px #20E9C1",
      },
      dropShadow: {
        custom: "0px 4px 2px rgba(0, 0, 0, 0.75)",
      },
      colors: {
        backgroundColor: "#0A171E",
        aquaMarine: "#20E9C1",
        aquaMarineB: "#20E9C1d5",
        dark: "#172935",
        lightTurquoise: "#87EED9",
        riverBed: "#41515B",
        offwhite: "#FFF8F8",
        dashboardText: "#CBD0CF",
        blackish: "#202222",
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
      linearGradientColors: {
        // Define your custom gradients here
        "custom-gradient": ["to right", "red", "yellow", "green"],
        // You can add more gradients as needed
      },
    },
  },
  plugins: [],
};
