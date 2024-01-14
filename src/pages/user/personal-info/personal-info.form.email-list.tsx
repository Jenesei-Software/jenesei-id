import { IconCurved } from '@assets/icons/icon-curved'
import { IconValidate } from '@assets/icons/icon-validate'
import { LogoServices } from '@assets/icons/logo-services'
import { ButtonBorderShort } from '@components/button-border/short'
import { ButtonPlaystationLong } from '@components/button-playstation/long'
import { useInputString } from '@hooks/inputs/use-input-string'
import { StyledInterB16 } from '@styles/fonts/inter'
import {
  FrameColumnGap180,
  FrameColumnGap250,
  FrameColumnGap300,
  FrameColumnGap78Center,
  FrameRowGap,
  FrameRowWrapGap,
  UserLine,
} from '@styles/pages'
import { theme } from '@styles/theme'
import React from 'react'
import { useTranslation } from 'react-i18next'

export const PersonalInfoFormEmailList: React.FC = () => {
  const { t } = useTranslation('personal-info', { keyPrefix: 'email-list' })
  const { InputString: InputFirstEmail } = useInputString({
    placeholder: t('inputs.email'),
    noSpaces: true,
    readOnly: true,
    initialValue: 'cyrilstrone@gmail.com',
  })
  const { InputString: InputSecondEmail } = useInputString({
    placeholder: t('inputs.email'),
    noSpaces: true,
    readOnly: true,
    initialValue: 'kidvos@gmail.com',
  })
  return (
    <React.Fragment>
      <UserLine />
      <FrameRowGap>
        <FrameColumnGap300>
          <StyledInterB16>{t('title-1')}</StyledInterB16>
          {InputFirstEmail}
        </FrameColumnGap300>
        <FrameColumnGap250 mediaMaxWidth={theme.size.mobile}>
          <StyledInterB16>{t('title-2')}</StyledInterB16>
          <FrameRowWrapGap>
            <ButtonPlaystationLong
              icon={IconCurved.Lock}
              title={'General'}
              checked={true}
            />
            <ButtonBorderShort type="border" icon={IconCurved.Plus} />
          </FrameRowWrapGap>
        </FrameColumnGap250>
        <FrameColumnGap180 mediaMaxWidth={theme.size.tablet}>
          <StyledInterB16>{t('title-3')}</StyledInterB16>
          <FrameRowWrapGap>
            <LogoServices.JeneseiTask.Min />
            <LogoServices.JeneseiID.Min />
            <LogoServices.BusinessRoulette.Min />
          </FrameRowWrapGap>
        </FrameColumnGap180>
        <FrameColumnGap78Center>
          <StyledInterB16>{t('title-4')}</StyledInterB16>
          <IconValidate.Min.True />
        </FrameColumnGap78Center>
      </FrameRowGap>
      <FrameRowGap>
        <FrameColumnGap300>{InputSecondEmail}</FrameColumnGap300>
        <FrameColumnGap250 mediaMaxWidth={theme.size.mobile}>
          <FrameRowWrapGap>
            <ButtonPlaystationLong title={'Home'} checked={false} />
            <ButtonBorderShort type="border" icon={IconCurved.Plus} />
          </FrameRowWrapGap>
        </FrameColumnGap250>
        <FrameColumnGap180 mediaMaxWidth={theme.size.tablet}>
          <FrameRowWrapGap>
            <LogoServices.JeneseiID.Min />
          </FrameRowWrapGap>
        </FrameColumnGap180>
        <FrameColumnGap78Center>
          <IconValidate.Min.False />
        </FrameColumnGap78Center>
      </FrameRowGap>
    </React.Fragment>
  )
}