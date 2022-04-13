import Image from 'next/image';
import cn from 'classnames';
import SubHeading from 'components/SubHeading';

import images from '../../constants/images';
import chooseByType from 'utils/chooseValueByType';

import styles from './styles.module.scss';

const MenuIntro = ({ info, slug }) => {
  const chooseMenuItem = info?.metadata?.menu?.length ?  chooseByType(info?.metadata?.menu, `${slug}`) : [];

  return (
    <div className={cn(styles.intro_container, 'app_bg', 'app_wrapper', 'section_padding')} id='menu-intro'>
      <div className={cn('app_wrapper_img','app_wrapper_img_reverse')}>
        <div className={cn(styles.wrapper_img, 'img_padding')} >
          <Image
            src={chooseMenuItem?.picture?.imgix_url || images.chef}
            alt='intro_image'
            width={550}
            height={600}
            />
        </div>
    </div>
    <div className='app_wrapper_info'>
      <SubHeading title='Try it!' />
        <h1 className='headtext_cormorant'>{chooseMenuItem?.title || 'We believe in'}</h1>
        <div className={styles.intro_content}>
          <div className={styles.intro_sign}>
            <p>{chooseMenuItem?.tags || 'AU'}</p>
            <p className='opensans'>{chooseMenuItem?.price || 'AU'}</p>
          </div>
          <div className={styles.intro_content_quote}>
            <p className='opensans'>{chooseMenuItem?.intro || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuIntro;