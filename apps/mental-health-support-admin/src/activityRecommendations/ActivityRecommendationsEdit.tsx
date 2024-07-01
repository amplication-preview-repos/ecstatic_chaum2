import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ActivityRecommendationsEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="activityType" source="activityType" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="link" source="link" />
      </SimpleForm>
    </Edit>
  );
};
