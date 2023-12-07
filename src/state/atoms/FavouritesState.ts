import {atom} from 'recoil';
import { RocketData } from '../../components/organisms/ToursList/ToursList';

export const favouritesState = atom({
    key: 'favourites',
    default: [] as RocketData[],
});