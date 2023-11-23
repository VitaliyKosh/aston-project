import { postDictionary } from 'shared/dictionaries/post';
import c from './specification-list.module.scss';
import { classNames } from 'shared/lib/class-names';
import { type RC } from 'shared/types/component';
import { type Specifications, type Post } from 'shared/models/post';
import { specificationDictionary } from 'shared/dictionaries/specifications';
import { ListPart } from '../list-part/list-part';
import { type StringKeysOf } from 'shared/types/string-keys-of';

interface Props {
    className?: string
    post: Post
}

const postKeys: Array<StringKeysOf<Post>> = ['slogan'];
const specificationKeys: Specifications[] = ['cpu', 'os', 'year'];

export const SpecificationList: RC<Props> = ({ className, post }) => {
    return (
        <div className={classNames([c.specificationList, className])}>
            <ListPart keys={postKeys} dictionary={postDictionary} source={post}/>
            <ListPart keys={specificationKeys} dictionary={specificationDictionary} source={post.specifications}/>
        </div>
    );
};
