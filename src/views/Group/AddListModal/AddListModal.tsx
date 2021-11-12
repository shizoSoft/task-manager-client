import { Dialog, TextInputField } from 'evergreen-ui';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useEffect } from 'react';

const validationSchema = Yup.object().shape({
  title: Yup.string().min(3).max(18).required(),
});

interface AddListModalProps {
  isShown: boolean;
  onClose: () => void;
  onConfirm: (cardData: { title: string }) => void;
}

function AddListModal({ isShown, onClose, onConfirm }: AddListModalProps) {
  const formik = useFormik({
    validationSchema,
    initialValues: {
      title: '',
    },
    onSubmit: () => undefined,
  });

  useEffect(() => {
    if (isShown) {
      formik.setFieldValue('title', '');
    }
    // eslint-disable-next-line
  }, [isShown]);

  return (
    <Dialog
      isShown={isShown}
      title="Add List"
      confirmLabel="Add"
      onCloseComplete={onClose}
      onConfirm={() => onConfirm(formik.values)}
    >
      <TextInputField
        type="text"
        placeholder="Title"
        width="100%"
        label="Title"
        name="title"
        value={formik.values.title}
        onChange={formik.handleChange}
      />
    </Dialog>
  );
}

export default AddListModal;
