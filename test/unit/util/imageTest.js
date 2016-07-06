
import assert   from 'assert';
import sinon    from 'sinon';

import { imageCdn } from 'config';

import { getScaledImage, getCroppedImage, getImageUrl  } from '/util/image';



describe( 'getCroppedImage', () =>
{
    it( 'should retrieve an image url in sfc mode', () =>
    {
        let url = getCroppedImage( 'doge', 100, 101 );
        assert.equal( url, `${imageCdn}/resizer/sfc_100x101_doge` );
    } );
} );



describe( 'getImageUrl', () =>
{
    it( 'should retrieve an image url', () =>
    {
        let url = getImageUrl( '666', '100x101', 'doge' );
        assert.equal( url, `${imageCdn}/resizer/666_100x101_doge` );

        url     = getImageUrl( '666', '100x101', 'doge', 60 );
        assert.equal( url, `${imageCdn}/resizer/666_100x101_60/_doge` );
    } );
} );



describe( 'getScaledImage', () =>
{
    it( 'should retrieve an image url in sfh mode', () =>
    {
        let url = getScaledImage( 'doge', 100 );
        assert.equal( url, `${imageCdn}/resizer/sfh_100x0_doge` );
    } );
} );