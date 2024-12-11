'use client';

import { Editor } from '@toast-ui/react-editor';
import { TNoteFormInput } from '@type/note';
import NoteForm from '@ui/note/NoteForm';
import { useRef } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

export default function Page() {
  const methods = useForm<TNoteFormInput>({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const editorRef = useRef<Editor | null>(null);

  return (
    <FormProvider {...methods}>
      <form>
        <NoteForm editorRef={editorRef} />
      </form>
    </FormProvider>
  );
}