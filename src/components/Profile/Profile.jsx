import React from 'react';
import './Profile.css';

const Profile = () => (
  <div className='profile'>
    <h1 className='profile__title'>Дайнеко Виталий Геннадьевич</h1>
    <p className='profile__text'>
      Дата рождения:
      <span className='profile__bold'> 12.03.1997 (24 года)</span>
    </p>
    <p className='profile__text'>
      Желаемая должность:
      <span className='profile__bold'> Junior Front-end Developer</span>
    </p>
    <p className='profile__text'>
      Контактные данные:
      <span className='profile__bold'> +375 (25) 706-69-65</span>
    </p>
    <br />
    <br />
    <h2>Для выхода из профиля нужно почистить куки :)</h2>
  </div>
);

export default Profile;
