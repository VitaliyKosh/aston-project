import React, { useState, type KeyboardEventHandler, useRef } from 'react';
import c from './input-with-sagest.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { InputWithRef } from 'shared/ui/input/input';
import { type Sagest } from '../../types/sagest';
import { HighlightText } from '../highlight-text/highlight-text';
import { queueMacrotask } from 'shared/helpers/queue-macrotask';
import { Loader } from 'shared/ui/loader/loader';
import { Link } from 'react-router-dom';
import { getLocationWithParams } from 'shared/helpers/get-location';
import { publicRoutePaths } from 'app/providers/app-router/config/route-configs';

interface Props {
    className?: string
    handleKeypressEvent: KeyboardEventHandler<HTMLInputElement>
    searchQuery: string
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>
    sagestList: Sagest[]
    isLoading: boolean
}

export const InputWithSagest: RC<Props> = ({
    className,
    handleKeypressEvent,
    searchQuery,
    setSearchQuery,
    sagestList,
    isLoading
}) => {
    const [isSagestDisplay, setIsSagestDisplay] = useState<boolean>(false);
    const [showClass, setShowClass] = useState<boolean>(false);
    const blurRef = useRef<ReturnType<typeof setTimeout>>();

    const onFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
        clearTimeout(blurRef.current);
        setIsSagestDisplay(true);
        queueMacrotask(() => { setShowClass(true); });
    };

    const onBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
        setShowClass(false);
        blurRef.current = setTimeout(() => {
            setIsSagestDisplay(false);
        }, 1000);
    };

    return (
        <div className={classNames([c.inputWithSagest, className])}>
            {isSagestDisplay && (sagestList.length > 0 || isLoading) && <div
                className={classNames([c.sagestList], { [c.show]: showClass })}
            >
                {isLoading
                    ? <div className={c.loaderWrapper}>
                        <Loader className={c.loader}/>
                    </div>
                    : sagestList.map((s) => {
                        return (
                            <Link
                                key={s.id}
                                className={c.sagest}
                                to={getLocationWithParams(publicRoutePaths.POST, { id: s.id })}
                            >
                                <div className={c.imgWrapper}>
                                    <img
                                        src={s.img}
                                        alt={s.title.substring(0, 10)}
                                        className={c.img}
                                    />
                                </div>
                                <div className={c.title}>{s.title}</div>
                                <div className={c.description}>
                                    <HighlightText
                                        id={s.id}
                                        delimiter='|'
                                    >
                                        {s.description}
                                    </HighlightText>
                                </div>
                            </Link>
                        );
                    })
                }
            </div>}
            <InputWithRef
                className={c.input}
                onKeyUp={handleKeypressEvent}
                value={searchQuery}
                setValue={setSearchQuery}
                onFocus={onFocus}
                onBlur={onBlur}
                size='s'
                placeholder='Поиск...'
            />
        </div>
    );
};
