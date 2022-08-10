import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
    cloud_name: 'react-apps-sj',
    api_key: '985573567685998',
    api_secret: 'vuxTHkmo-ArpQYLT7vXrRHObf0I',
    secure: true
});

describe('Pruebas en fileUpload', () => {

    test('debe subir el archivo correctamente a Cloudinary', async () => {
        const imgUrl = 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png';
        const resp = await fetch(imgUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');
        const url = await fileUpload(file);

        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.png', '');

        const cloudResp = await cloudinary.api.delete_resources([`journal/${imageId}`], {
            resource_type: 'image'
        });

        // console.log({cloudResp});
    });

    test('debe retornar null', async () => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload();

        expect(url).toBe(null);
    });

    // test('debe subir el archivo correctamente a Cloudinary', () => {

    // });

    // test('debe subir el archivo correctamente a Cloudinary', () => {

    // });
});