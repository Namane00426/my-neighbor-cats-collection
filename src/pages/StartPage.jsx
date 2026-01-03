import React from 'react';
import styles from './StartPage.module.css';
import {useNavigate} from 'react-router-dom';



const StartPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      {/* パート1：ログイン / 登録 */}
      <section className={styles.section}>
        <h1 className={styles.heading}>そとネコずかん</h1>
        <p className={styles.subtext}>ログイン・登録・ゲストで利用できます</p>
        <div className={styles.authBox}>
          <button className={styles.button}>Login</button>
          <button className={styles.button}>Sign up</button>
          <button className={styles.button}>Guest</button>
        </div>
      </section>

      {/* パート2：このアプリについて */}
      <section className={styles.sectionAlt}>
        <h2 className={styles.heading}>このアプリについて</h2>
        <p className={styles.subtext}>
          外出中に見つけた猫たちの情報を地図に記録するアプリです。<br />
          新顔やなじみの猫たちをコレクションに追加しましょう。</p>
      </section>

      {/* パート3：使い方 */}
      <section className={styles.section}>
        <h2 className={styles.heading}>使い方</h2>
        <p className={styles.subtext}>
          猫を見つけたら、位置・写真・メモを登録してコレクションに追加！<br />
          あなただけのそとネコずかんをつくりましょう。
        </p>
      </section>

      {/* フッター：ボタン */}
      <section className={styles.footer}>
        <button className={styles.button}>Back to top</button>
        <button className={styles.button}
        onClick={()=> navigate('/map')}
        >Start app</button>
      </section>
    </div>
  );

};
export default StartPage;