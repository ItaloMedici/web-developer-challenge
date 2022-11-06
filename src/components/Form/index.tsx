import React from "react";
import { useIntl } from "react-intl";
import {
  DiscardButton,
  Footer,
  FormStyled,
  ImageInput,
  InputMesage,
  InputName,
  PublishButton,
} from "./styles";

const Form: React.FC = () => {
  const { formatMessage } = useIntl();

  return (
    <FormStyled>
      <ImageInput type={"file"} />
      <InputName placeholder={formatMessage({ id: "writeYourName" })} />
      <InputMesage placeholder={formatMessage({ id: "message" })} rows={3} />
      <Footer>
        <DiscardButton>{formatMessage({ id: "discard" })}</DiscardButton>
        <PublishButton>{formatMessage({ id: "publish" })}</PublishButton>
      </Footer>
    </FormStyled>
  );
};

export default Form;
