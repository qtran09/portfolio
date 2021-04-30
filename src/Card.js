import './Card.scss';
import {Link} from 'react-router-dom';
import {useState} from 'react';

const ProList = (
    <div id='pro'>
        <h2 id='pro_title'>Professional</h2>
        <ul id='pro_links'>
            <li>
                <a href='https://www.linkedin.com/in/qtran09/' target='_blank' rel='noreferrer'>LinkedIn</a>
            </li>
            <li>
                <a href='https://github.com/qtran09' target='_blank' rel='noreferrer'>Github</a>
            </li>
            <li>
                <Link to='/developer' target='_blank' rel='noreferrer'>Developer Overview</Link>
            </li>
        </ul>
    </div>
);
const CasualList = (
    <div id='casual'>
        <h2 id='personal_title'>Socials</h2>
        <ul id='personal_links'>
            <li>
                <a href='https://www.facebook.com/quyen.tran.1422/' target='_blank' rel='noreferrer'>Facebook</a>
            </li>
            <li>
                <a href='https://www.instagram.com/ssbmq/' target='_blank' rel='noreferrer'>Instagram</a>
            </li>
            <li>
                <a href='https://www.twitch.tv/bigkitchensink' target='_blank' rel='noreferrer'>Twitch</a>
            </li>
        </ul>
    </div>
);

const Card = () =>
{
    const [CardView, setCardView] = useState(ProList);
    const [ButtonText, setButtonText] = useState('Casual')
    const switchViews = () => 
    {
        if(CardView === ProList) 
        {
            setCardView(CasualList);
            setButtonText('Professional');
        }
        else 
        {
            setCardView(ProList);
            setButtonText('Casual');
        }
    }
    return (
    <div id='card'>
        {CardView}
        <button id='viewSwitch' onClick={switchViews}>View {ButtonText}</button>
    </div>
    );
};

export default Card;