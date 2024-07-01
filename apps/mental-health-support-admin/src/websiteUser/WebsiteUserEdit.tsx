import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const WebsiteUserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <BooleanInput label="isCrisis" source="isCrisis" />
        <TextInput label="password" source="password" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
