/**
 * Created by dkw on 12/03/2017.
 */

export default function someModule () {
    /*
    * it will call with "import someModule from './path'"
    * */

    return 'some data';
}

export const otherMethod = function () {
    /*
     * it will call with "import { otherModule } from './path'"
     * */

    return 'other data';
};
