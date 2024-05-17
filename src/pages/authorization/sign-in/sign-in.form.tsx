import { SignInInfoFormContainer } from '.'
import { SignInDto, usePostAuthSignIn } from '@api/auth'
import { ButtonBig } from '@components/button-big'
import { useGoToLink } from '@hooks/use-go-to-link'
import { ENUMLocalStorage, useAxios } from '@providers/provider-axios'
import { UIInterR16OnClick } from '@styles/components'
import { InputString } from 'jenesei-react-ui'
import { useToast } from 'rc-toastr'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

export const SignInForm: FC = () => {
  const goToLink = useGoToLink()
  const { writeToLocalStorage } = useAxios()
  const { toast } = useToast()

  const { mutate: mutatePostAuthSignIn, isPending: isPendingPostAuthSignIn } =
    usePostAuthSignIn({
      onSuccess: () => {
        writeToLocalStorage(ENUMLocalStorage.isAuth, true)
      },
      onError: (error) => {
        writeToLocalStorage(ENUMLocalStorage.isAuth, true)
        toast.error(`${error.response?.data.message}`)
      },
    })
  const { t } = useTranslation('sign-in')
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<SignInDto>()

  const onSubmit: SubmitHandler<SignInDto> = (data) => {
    mutatePostAuthSignIn({ body: data })
  }
  return (
    <SignInInfoFormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputString
        theme="cloud"
        placeholder={t('inputs.username')}
        register={{
          ...register('username', {
            required: true,
            minLength: 2,
            maxLength: 50,
          }),
        }}
      />
      <InputString
        theme="cloud"
        placeholder={t('inputs.password')}
        type="password"
        register={{
          ...register('password', {
            required: true,
            minLength: 8,
            maxLength: 30,
          }),
        }}
      />
      <UIInterR16OnClick
        onClick={() => goToLink('/authorization/password-forgot')}
      >
        {t('forgot-password')}
      </UIInterR16OnClick>
      <ButtonBig
        $loading={isPendingPostAuthSignIn}
        disabled={!isValid}
        onClick={handleSubmit(onSubmit)}
        title={t('buttons.login')}
        $variant={'product'}
      />
    </SignInInfoFormContainer>
  )
}
