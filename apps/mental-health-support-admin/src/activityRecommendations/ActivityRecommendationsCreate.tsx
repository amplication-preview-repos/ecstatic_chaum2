import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ActivityRecommendationsCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="activityType" source="activityType" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="link" source="link" />
      </SimpleForm>
    </Create>
  );
};
