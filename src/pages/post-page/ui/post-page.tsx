import c from './post-page.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getApp } from 'shared/helpers/get-app';
import { type Post } from 'shared/models/post';
import { PageTitle } from 'shared/ui/page-title/page-title';
import { SpecificationList } from 'shared/specification-list';
import { postDictionary } from 'shared/dictionaries/post';
import { PageLoader } from 'widgets/page-loader';
import { AddToFavorite } from 'widgets/add-to-favorite';
import { useFavorites } from 'shared/hooks/use-favorites';
import { useObservableState } from 'repositories/redux/hooks/use-observable-state';
import { AuthStatus } from 'shared/models/user';

interface Props {
    className?: string
}

const postInitialState: Omit<Post, 'id'> = {
    title: '',
    specifications: {
        year: '',
        os: '',
        cpu: ''
    },
    slogan: ''
};

const PostPage: RC<Props> = ({ className }) => {
    const app = getApp();
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const { favorites, isFavoritesLoading } = useFavorites();
    const authStatus = useObservableState(() => app.user.getAuthStatus());

    if (!id) {
        return null;
    }

    const [post, setPost] = useState<Post>({ id, ...postInitialState });

    const fetchPost = async (id: string): Promise<void> => {
        setIsLoading(true);

        const postData = await app.post.getPost(id);

        setPost(postData);
        setIsLoading(false);
    };

    useEffect(() => {
        if (id) {
            void fetchPost(id);
        }
    }, [id]);

    if (isLoading || isFavoritesLoading) {
        return <PageLoader/>;
    }

    return (
        <div className={classNames([c.postPage, className])}>
            <div
                className={c.titleBox}
            >
                <PageTitle className={c.title}>{post.title}</PageTitle>
                {authStatus === AuthStatus.SignedIn && <AddToFavorite isFavorite={favorites.includes(id)} id={id}/>}
            </div>
            <div className={c.grid}>
                <div className={c.imgWrapper}>
                    <img src={post.img} placeholder={post.title} className={c.img} />
                </div>
                <SpecificationList post={post}/>
            </div>
            <PageTitle className={c.title}>{postDictionary.description}</PageTitle>
            <div className={c.description}>{post.description}</div>
        </div>
    );
};

export default PostPage;
