import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'



const getStoredData = () => {
    const storedData = localStorage.getItem('Donate')
    if (storedData) {
        return JSON.parse(storedData)
    }
    return [];
}

const setStoredData = (id) => {
    const getLsData = getStoredData()

    const isExist = getLsData.find(storedData => storedData == id)

    if (!isExist) {
        getLsData.push(id);
        localStorage.setItem('Donate', JSON.stringify(getLsData))
        Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Thank you for your donation!',
        });

    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Failed',
            text: 'Oh! You Have Already Donated',
        });
    }


}

export { getStoredData, setStoredData }