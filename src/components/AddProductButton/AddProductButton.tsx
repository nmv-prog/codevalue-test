import { AddButton } from './AddProductButtonStyle'

type Props = {
    setShowCreateForm: React.Dispatch<React.SetStateAction<boolean>>
}

const AddProductButton = ({ setShowCreateForm }: Props) => {
    return (
        <div>
            <AddButton onClick={() => setShowCreateForm(true)} >+Add</AddButton>
        </div>
    )
}

export default AddProductButton