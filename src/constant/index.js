export const dashboardInformation = [
    {
        imgUrl: "/src/assets/home2.png",
        label: "Home",
        route: '/doctor/dashboard'
    },

    {
        imgUrl: "/src/assets/prescription1.png",
        label: "Prescriptions",
        route: '/doctor/prescription'
    },
    {
        imgUrl: "/src/assets/add.png",
        label: "Add prescription",
        route: '/doctor/add-prescription'
    }
]

export const wardenInformation = [
    {
        imgUrl: "/src/assets/home2.png",
        label: "Home",
        routeTo: "/hostel/dashboard"
    },
    {
        imgUrl: "/src/assets/prescription1.png",
        label: "Emergency",
        routeTo: "/hostel/emergency"
    },
    {
        imgUrl: "/src/assets/analytics.png",
        label: "Analytics",
        routeTo: "/analytics"
    }
]

export const quote = "Being a doctor is not just about treating illnesses, it's about inspiring hope, instilling courage, and healing hearts."

export const shifts = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export const times = ["2 PM to 6 PM", "2 PM to 6 PM", "2 PM to 6 PM", "2 PM to 6 PM", "2 PM to 6 PM", "2 PM to 6 PM", "2 PM to 6 PM"]
export const appbarInformation = [
    {
        imgUrl: "/src/assets/home2.png",
        navigateTo: "/student/dashboard"
    },
    {
        imgUrl: "/src/assets/comment5.png",
        navigateTo: "/student/ambulance"
    },
    {
        imgUrl: "/src/assets/bell5.png",
        navigateTo: "/student/prescription-history"
    },
    {
        imgUrl: "/src/assets/setting2.png",
        navigateTo: "/student/Doctor-details"
    }
]

export const URL_ORIGIN = "http://localhost:8000"
export const prescriptionPdf = "https://firebasestorage.googleapis.com/v0/b/healthcare-5ac07.appspot.com/o/prescription%20(9).pdf?alt=media&token=7053ab00-e43f-43f1-b28b-2736822f2d11";