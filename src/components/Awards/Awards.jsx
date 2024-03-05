import css from './Awards.module.css';
import sprite from '../../images/sprite.svg';
import awards from '../../data/awards.json';

const Awards = () => {
  return (
    <div className={css.container}>
      <p className={css.sitePartName}>AWARDS</p>
      <ul className={css.list}>
        {awards.map(({ title, time, description }) => (
          <li className={css.listItem}>
            <div className={css.listItemContent}>
              <div>
                <p className={css.title}>{title}</p>
                <p className={css.description}>{description}</p>
              </div>
              <p className={css.time}>{time}</p>
            </div>

            <svg className={css.arrowIcon}>
              <use xlinkHref={`${sprite}#icon-list-down-arrow`} />
            </svg>
          </li>
        ))}

        {/* <li className={css.listItem}>
          <p className={css.listItemTitle}>
            <span>GOLDEN LION, XLVII VENICE BIENNALE</span>
            <span>1997</span>
          </p>
          <svg className={css.arrowIcon}>
            <use xlinkHref={`${sprite}#icon-list-down-arrow`} />
          </svg>
        </li> */}

        {/* <li className={css.listItem}>
          <p className={css.listItemTitle}>
            <span>NIEDERSÄCHSISCHER KUNSTPREIS</span>
            <span>2002</span>
          </p>
          <svg className={css.arrowIcon}>
            <use xlinkHref={`${sprite}#icon-list-down-arrow`} />
          </svg>
        </li> */}

        {/* <li className={css.listItem}>
          <p className={css.listItemTitle}>
            <span>INTERNATIONAL ASSOCIATION OF ART CRITICS</span>
            <span>2003</span>
          </p>
          <svg className={css.arrowIcon}>
            <use xlinkHref={`${sprite}#icon-list-down-arrow`} />
          </svg>
        </li> */}

        {/* <li className={css.listItem}>
          <p className={css.listItemTitle}>
            <span>AUSTRIAN DECORATION FOR SCIENCE AND ART</span>
            <span>2008</span>
          </p>
          <svg className={css.arrowIcon}>
            <use xlinkHref={`${sprite}#icon-list-down-arrow`} />
          </svg>
        </li> */}

        {/* <li className={css.listItem}>
          <p className={css.listItemTitle}>
            <span>HONORARY DOCTORATE OF ARTS, UNIVERSITY OF PLYMOUTH UK</span>
            <span>2009</span>
          </p>
          <svg className={css.arrowIcon}>
            <use xlinkHref={`${sprite}#icon-list-down-arrow`} />
          </svg>
        </li> */}

        {/* <li className={css.listItem}>
          <p className={css.listItemTitle}>
            <span>CULTURAL LEADERSHIP AWARD, AMERICAN FEDERATION OF ARTS</span>
            <span>2011</span>
          </p>
          <svg className={css.arrowIcon}>
            <use xlinkHref={`${sprite}#icon-list-down-arrow`} />
          </svg>
        </li> */}
      </ul>
    </div>
  );
};

export default Awards;
