
import styles from './Projects.module.scss'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { types, projects } from './Datas.js'
import { useStore, actions } from '../../stores'
import GalleryItem from './GalleryItem'
import DetailItem from './DetailItem.js'

const btnOption = clsx(styles.btnOption)
const btnOptionActive = clsx(styles.btnOption, styles.active)

function Projects({ id, Light }) {

  const [state, dispatch] = useStore()
  const { type, itemIndex } = state
  const handleBtnType = (item) => {
    dispatch(actions.addType(item))
  }

  //handle **theme light
  const theme = clsx(styles.container, {
    [styles.Light]: Light
  })

  const checkType = (projectType, type) => {
    if (projectType === type) {
      return true
    }
    if (type === 'All') {
      return true
    }
  }

  return (
    <div id={id} className={theme} >
      <div clsx={clsx(styles.titleSubject)}>
        <h1 className={clsx(styles.titleText)}>Projects</h1>
      </div>
      <div className={clsx(styles.underline)}></div>
      <div className={clsx(styles.contentContainer)}>
        <ul className={clsx(styles.contentHeader)}>
          {/* <div className={clsx(styles.backgroundContainer)}>
            <div className={clsx(styles.backgroundColor)}></div>
          </div> */}
          {types.map(item =>
            <li
              onClick={() => { handleBtnType(item) }}
              className={type === item ? btnOptionActive : btnOption}
              key={item}
            >
              {item}
              <div className='underlineTitle'></div>
            </li>
          )}
        </ul>
      </div>
      <div className={clsx(styles.galleryContainer)}>
        <div className={clsx(styles.gallery)}>
          {projects.map(project => {
            // return (
            //   <GalleryItem
            //     key={project.id}
            //     {...project}
            //     show
            //   />
            // )
            if (checkType(project.type, type)) {
              return (
                <GalleryItem
                  key={project.id}
                  {...project}
                />
              )
            }
          }
          )}
        </div>
        {itemIndex && <DetailItem itemIndex={itemIndex} />}
      </div>

    </div>
  );
}

export default Projects;
