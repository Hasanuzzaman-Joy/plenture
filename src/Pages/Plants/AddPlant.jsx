import { useEffect } from 'react';
import AddPlantForm from '../../Component/Plant/AddPlantForm';

const AddPlant = () => {
    useEffect(() => {
        document.title = "Plenture | AddPlant";
    }, [])

    return (
        <AddPlantForm />
    );
};

export default AddPlant;