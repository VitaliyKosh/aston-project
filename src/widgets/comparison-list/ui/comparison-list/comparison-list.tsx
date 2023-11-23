import c from './comparison-list.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { ComparisonCell } from '../comparison-cell/comparison-cell';
import { ComparisonTitle } from '../comparison-title/comparison-title';
import { comparisonDictionary } from 'widgets/comparison-list/dictionaries/comparison';
import { useTheme } from 'app/providers/theme-provider';
import { Theme } from 'shared/types/theme';
import { useFavoriteRows } from 'widgets/comparison-list/providers/favorite-list-provider';

interface Props {
    className?: string
}
export const ComparisonList: RC<Props> = ({ className }) => {
    const { rows } = useFavoriteRows();
    const { theme } = useTheme();

    if (rows[0].values.length < 1) {
        return <div className={c.empty}>Пусто...</div>;
    }

    return (
        <div className={classNames([c.comparisonList, className])}>
            <table className={c.table}>
                <tbody>
                    {rows.map(({ key, values }) => (
                        <tr
                            key={key}
                            className={classNames(
                                [c.row, className],
                                {
                                    [c.dark]: theme === Theme.Dark,
                                    [c.light]: theme === Theme.Light
                                }
                            )}
                        >
                            <ComparisonTitle
                                className={c.cell}
                                title={comparisonDictionary[key]}
                            />
                            {values.map((cell) => (
                                <ComparisonCell
                                    className={c.cell}
                                    key={key + cell.id}
                                    cell={cell}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
