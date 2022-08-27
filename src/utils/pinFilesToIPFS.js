import axios from "axios";

export const PinFilesToIPFS = async (formData) => {
    try {
        const config = {
            method: 'post',
            url: 'https://api.pinata.cloud/pinning/pinFileToIPFS',
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiYmUwY2YzYi04MTM4LTQ5MjUtOTI1My1lZDJlOGVhOWFlNjYiLCJlbWFpbCI6InBhdmFua3VtYXJrcGtwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImlkIjoiRlJBMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfSx7ImlkIjoiTllDMSIsImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxfV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiIzNDA0MDg2NzdhZDliYjNhYjBlYSIsInNjb3BlZEtleVNlY3JldCI6ImYyYzAyYzE2YWI0NmQxZjYzNDYwZjI1YTQ1NDUxOWJiZWE5OTM1MzM4Y2EyYzliZWM2MDU4MWVkMmJmM2QzOTMiLCJpYXQiOjE2NjE1MTQxMTN9.82s63i4doG_y-Q8YO6T2iY-ohNPuSxeyXibuAObIkLM',
                'Content-Type': 'multipart/form-data'
            },
            data : formData
        }

        return axios(config)

    } catch (err) {
        console.log(err)
        throw err
    }
}