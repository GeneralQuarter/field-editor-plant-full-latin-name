import React from 'react';
import { FieldExtensionSDK } from '@contentful/app-sdk';
import { SlugEditor } from '@contentful/field-editor-slug';
import { useEffect } from 'react';

interface FieldProps {
  sdk: FieldExtensionSDK;
}

const Field = ({sdk}: FieldProps) => {
  const field = sdk.field;

  const genusField = sdk.entry.fields['genus'];
  const speciesField = sdk.entry.fields['species'];
  const varietyCultivarField = sdk.entry.fields['varietyCultivar'];

  const updateFullLatinName = () => {
    const genus = genusField.getValue() as string;
    const species = speciesField.getValue() as string;
    const varietyCultivar = varietyCultivarField.getValue() as string;

    if (!genus || !species) {
      field.setValue('');
      return;
    }

    const newValue = `${genus} ${species}${varietyCultivar ? ` '${varietyCultivar}'` : ''}`;

    if (field.getValue() === newValue) {
      return;
    }

    field.setValue(newValue);
  };

  useEffect(() => {
    const unsub = genusField.onValueChanged(() => {
      updateFullLatinName();
    });

    return unsub;
  });

  useEffect(() => {
    const unsub = speciesField.onValueChanged(() => {
      updateFullLatinName();
    });

    return unsub;
  });

  useEffect(() => {
    const unsub = varietyCultivarField.onValueChanged(() => {
      updateFullLatinName();
    });

    return unsub;
  });

  return <SlugEditor baseSdk={sdk} field={field} isInitiallyDisabled={true} />
}

export default Field;
