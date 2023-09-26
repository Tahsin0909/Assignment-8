import Swal from 'sweetalert2/dist/sweetalert2.js'
// const Swal = require('sweetalert2')
import 'sweetalert2/src/sweetalert2.scss'
const getStoredData = () => {

    const storedData = localStorage.getItem('Donate')
    if (storedData) {
        return JSON.parse(storedData)
    }
    return [];
}

const setStoredData = (id ) => {
    const getLsData = getStoredData()

    const isExist = getLsData.find(storedData => storedData == id)

    if (!isExist) {
        getLsData.push(id);
        localStorage.setItem('Donate', JSON.stringify(getLsData))
        // return swalData
        // Swal("Success", "Thank you for your donation!", "success");
        // Swal.fire(
        //     'Success', 'Thank you for your donation!', 'success'
        //     )
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

export {getStoredData, setStoredData }