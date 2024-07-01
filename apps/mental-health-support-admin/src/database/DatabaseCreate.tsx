import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const DatabaseCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput
          label="connectionString"
          multiline
          source="connectionString"
        />
        <TextInput label="name" source="name" />
        <TextInput label="type" source="typeField" />
      </SimpleForm>
    </Create>
  );
};
