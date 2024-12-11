'use client';

import { useFormContext } from 'react-hook-form';
import { TNoteFormInput } from '@type/note';
import Button from '@ui/common/Button';
import { usePopup } from '@hooks/usePopup';
import { isEmptyText } from '@util/note';

interface INoteHeaderProps {
  handleSaveDraft: () => void;
}

export default function NoteHeader({ handleSaveDraft }: INoteHeaderProps) {
  const { watch } = useFormContext<TNoteFormInput>();
  const { openPopup } = usePopup();

  const handlePopup = () => {
    openPopup({
      popupText: '이전에 임시 저장한 내용은 사라집니다.',
      showCancelButton: true,
      confirmButtonText: '확인',
      onConfirm: handleSaveDraft,
    });
  };

  return (
    <section className="mb-4 flex h-9 items-center justify-between gap-2 sm:h-11">
      <div className="text-base font-semibold leading-normal text-slate-900 dark:text-white sm:text-lg sm:leading-7">
        노트 작성
      </div>

      <div className="flex w-[176px] gap-2 sm:w-[206px]">
        <Button
          size="middle"
          variant="outlined"
          className="cursor-pointer border-white bg-white px-4 py-2 text-primary hover:text-mint-700 sm:px-6 sm:py-3"
          onClick={handlePopup}
          type="button"
          disabled={
            isEmptyText({ value: watch('title'), hasHtml: false }) &&
            isEmptyText({ value: watch('content'), hasHtml: true })
          }
        >
          임시저장
        </Button>
        <Button
          size="middle"
          variant="solid"
          className="cursor-pointer border-slate-400 bg-slate-400 px-4 py-2 text-white hover:border-primary hover:bg-primary hover:text-white sm:px-6 sm:py-3"
          disabled={
            isEmptyText({ value: watch('title'), hasHtml: false }) &&
            isEmptyText({ value: watch('content'), hasHtml: true })
          }
          type="submit"
        >
          작성하기
        </Button>
      </div>
    </section>
  );
}