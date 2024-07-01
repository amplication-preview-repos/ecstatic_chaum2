import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const WebsiteUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <BooleanInput label="isCrisis" source="isCrisis" />
        <TextInput label="password" source="password" />
        <TextInput label="username" source="username" />
      </SimpleForm>
    </Create>
  );
};
