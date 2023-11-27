/* eslint-disable max-len */
import { publicRoutePaths } from 'app/providers/app-router/config/route-configs';
import c from './telegram-widget.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { getLocationWithParams } from 'shared/helpers/get-location';
import {
    faTelegram
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
    className?: string
    id: string
    text: string
}

export const TelegramWidget: RC<Props> = ({ className, id, text }) => {
    const url = encodeURIComponent(process.env.API_URL + getLocationWithParams(publicRoutePaths.POST, { id }));
    const urlText = encodeURIComponent(text);

    return (
        <a
            className={classNames([c.telegramWidget, className])}
            href={`https://telegram.me/share/url?url=${url}&text=${urlText}`}

        >
            <FontAwesomeIcon
                icon={faTelegram}
            />
        </a>
    );
};
