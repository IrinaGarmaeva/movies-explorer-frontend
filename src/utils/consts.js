// Patterns
export const PATTERN_USERNAME = "^[A-Za-zА-Яа-я\- ]{2,30}$"
export const PATTERN_EMAIL = "^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,63}$"
export const PATTERN_PASSWORD = "^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?!.*\s).{8,}$"


// Validation messages
export const VALIDATION_MESSAGES = {
  frontend: {
    email: "Введите адрес электронной почты",
    password: "Пароль должен быть не короче 8 букв и цифр",
    name: "Имя должно быть от 2 до 30 симв., содержать только буквы, дефис или пробел",
  }
}

// Response messages
export const RESPONSE_MESSAGES = {
  successOnUpdateProfile: "Данные профиля успешно обновлены",
  errorEmail: "Пользователь с таким email уже существует",
  errorGeneral: "Что-то пошло не так! Попробуйте ещё раз",
}

export const movies = [
  {
    "id": 1,
    "nameRU": "«Роллинг Стоунз» в изгнании",
    "nameEN": "Stones in Exile",
    "director": "Стивен Кайак ",
    "country": "США",
    "year": "2010",
    "duration": 61,
    "description": "В конце 1960-х группа «Роллинг Стоунз», несмотря на все свои мегахиты и сверхуспешные концертные туры, была разорена. Виной всему — бездарный менеджмент и драконовское налогообложение в Британии. Тогда музыканты приняли не самое простое для себя решение: летом 1971 года после выхода альбома «Stiсky Fingers» они отправились на юг Франции записывать новую пластинку. Именно там, на Лазурном Берегу, в арендованном Китом Ричардсом подвале виллы Неллькот родился сборник «Exile on Main St.», который стал лучшим альбомом легендарной группы.",
    "trailerLink": "https://www.youtube.com/watch?v=UXcqcdYABFw",
    "created_at": "2020-11-23T14:12:21.376Z",
    "updated_at": "2020-11-23T14:12:21.376Z",
    "image": {
        "id": 1,
        "name": "stones-in-exile",
        "alternativeText": "",
        "caption": "",
        "width": 512,
        "height": 279,
        "formats": {
            "thumbnail": {
                "hash": "thumbnail_stones_in_exile_b2f1b8f4b7",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 245,
                "height": 134,
                "size": 8.79,
                "path": null,
                "url": "/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg"
            },
            "small": {
                "hash": "small_stones_in_exile_b2f1b8f4b7",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 500,
                "height": 272,
                "size": 25.68,
                "path": null,
                "url": "/uploads/small_stones_in_exile_b2f1b8f4b7.jpeg"
            }
        },
        "hash": "stones_in_exile_b2f1b8f4b7",
        "ext": ".jpeg",
        "mime": "image/jpeg",
        "size": 25.53,
        "url": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg",
        "previewUrl": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg\n/uploads/all_tommoros_parties_33a125248d.jpeg\n/uploads/blur_a43fcf463d.jpeg\n/uploads/zagruzhennoe_113f557116.jpeg\n/uploads/taqwacore2_2f487d2e74.jpeg\n/uploads/881707734_640_d6a3a43358.jpeg\n/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg\n/uploads/images_5bfcbf36e6.jpeg\n/uploads/zagruzhennoe_1_fd5faff237.jpeg\n/uploads/images_244e1fd56f.jpeg\n/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg\n/uploads/590x400_2eccd40a93.jpeg\n/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg\n/uploads/1_6a9e0669ca.jpeg\n/uploads/zagruzhennoe_cba9c9f900.jpeg\n/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg\n/uploads/280x178_2_f2eee77cae.jpeg\n/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg\n/uploads/Backyard_327_3_2151980c5c.jpeg\n/uploads/zagruzhennoe_2_5f87844408.jpeg\n/uploads/maxresdefault_505b3fa578.jpeg\n/uploads/b1_3385dd88fe.jpeg\n/uploads/9c3adee646635c6aa56a229dbe9b9779_original_8b382dc3ec.jpeg\n/uploads/740x457_2016090618140134690b5589_07f872345d.jpeg\n/uploads/667708311_1280x720_558f3de42b.jpeg\n/uploads/inni_13_fb13830e94.jpeg\n/uploads/AAACDZTO_o_OJ_yo_Sf_EXLJ_5_J1u_J_r7j_FNH_vrcn_OAU_a_UX_s_Ljl6t_DBSZ_7_YPUDVPA_i_Cs1_Cje_y_Hb9_M8zvf6_DX_n_Qtux_Qa_SD_r_I_ea7df93d26.jpeg\n/uploads/amma_lo_fi_739aeb0890.jpeg\n/uploads/750x485_28d08c49c4.jpeg\n/uploads/zagruzhennoe_53d33dc9df.jpeg\n/uploads/TEENAGE_3_600_3b1cce5358.jpeg\n/uploads/unnamed_aa708a91a1.jpeg\n/uploads/133633090dfcb40e8e87ecf6cb52c419_c534c1283c.jpeg\n/uploads/zagruzhennoe_1_38e987f181.jpeg\n/uploads/Shut_Up_Hits_poster_f5bb0d6e83.jpeg\n/uploads/Art_Cinema_Webslug_Mr_Baker_de10be970f.jpeg\n/uploads/embed_still_available_now_8e4038f1f6.jpeg\n/uploads/704543546_960_d6340bce70.jpeg\n/uploads/Oil_City_Confidential_676986530_large_652c54fa63.jpeg\n/uploads/5a8db56aa48049529df13a2d2ab0_be34c45c62.jpeg\n/uploads/zagruzhennoe_58e5329700.jpeg\n/uploads/zagruzhennoe_1_9994d6db60.jpeg\n/uploads/BM_uc_YK_d_P4jn9lp_QF_7_Ew8z8_micr_f849e20df3.jpeg\n/uploads/ORCHARD_888003020894_Full_Image_Gallery_Cover_en_US_1551076193509_UY_500_UX_667_RI_VX_n_Xh_LAZXKUVW_a_NQPF_j2_CR_q_Ehjv_ERHT_od_TTW_0a20f1d30d.jpeg\n/uploads/zagruzhennoe_2_17bcd9ceff.jpeg\n/uploads/zagruzhennoe_3_312a12853b.jpeg\n/uploads/750x485_a07b1b2585.jpeg\n/uploads/14e1f2912a2a169b11820e3163df6c69_a01189ce50.jpeg\n/uploads/unnamed_0256d7127c.jpeg\n/uploads/zagruzhennoe_7326b1cb5f.jpeg\n/uploads/15786_oldschool_renegades_docu_c54f63dfc1.jpeg\n/uploads/552242179_1280x720_66bc43b289.jpeg\n/uploads/Super_Duper_Alice_Cooper_2014_8b1641fbaf.jpeg\n/uploads/orig_bc3e53efa8.jpeg\n/uploads/zagruzhennoe_1_1817cd23a2.jpeg\n/uploads/zagruzhennoe_2_c709860078.jpeg\n/uploads/zagruzhennoe_3_08092046af.jpeg\n/uploads/images_0bbc035397.jpeg\n/uploads/77e84d33e7f526823bd23362c6e66261_a9c0fb3836.jpeg\n/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png\n/uploads/Snimok_ekrana_2020_12_03_v_16_00_28_a851176a2d.png\n/uploads/Werewolves_Across_America_3f48106062.jpeg\n/uploads/zagruzhennoe_edcf93eb96.jpeg\n/uploads/maxresdefault_88702f9bc0.jpeg\n/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg\n/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg\n/uploads/zagruzhennoe_1_3b8b337f95.jpeg\n/uploads/unnamed_0bd470956a.jpeg\n/uploads/705753536_1280x720_3f3ec9830f.jpeg\n/uploads/wyr_139_03_7a244dbd6e.jpeg\n/uploads/zagruzhennoe_b22b6e2887.jpeg\n/uploads/images_d789f0a61a.jpeg\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_913b905856.png\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_707fba4597.png\n/uploads/maxresdefault_21f787cdf3.jpeg\n/uploads/maxresdefault_1_0cda104e49.jpeg\n/uploads/maxresdefault_2_3072271808.jpeg\n/uploads/images_f324307a7f.jpeg\n/uploads/unnamed_4f99c0fa1e.jpeg\n/uploads/zagruzhennoe_a32e347316.jpeg\n/uploads/maxresdefault_164e1c974c.jpeg\n/uploads/b80915f7_d774_4536_9e79_450578a40ad4_9131a274_04cd1fb520.jpeg\n/uploads/12032_770x433_74026cdeb6.jpeg\n/uploads/zagruzhennoe_1_70b0c1a682.jpeg\n/uploads/maxresdefault_1_5bef2a2c64.jpeg\n/uploads/750x485_6aa18b04bb.jpeg\n/uploads/3_29_4b376917c9.jpeg\n/uploads/upload_9120ff30_fa73_11e5_b942_b366214b09de_ff4e9a16b9.jpeg\n/uploads/zagruzhennoe_2_946c91c6d8.jpeg\n/uploads/maxresdefault_2_4747cae75c.jpeg\n/uploads/den_unge_zlatan_aca9a6118e.jpeg\n/uploads/zagruzhennoe_3_6dab3dce0f.jpeg\n/uploads/zagruzhennoe_4_63633dbd00.jpeg\n/uploads/81c_6f_Ledf_L_RI_13c54761cc.jpeg\n/uploads/zagruzhennoe_8e5b14a44a.jpeg\n/uploads/zagruzhennoe_1_1aee5f7ecf.jpeg\n/uploads/mqdefault_14f34c8254.jpeg\n/uploads/zagruzhennoe_2_d22375c7cf.jpeg\n/uploads/zagruzhennoe_3_c78d64a9f0.jpeg\n/uploads/zagruzhennoe_4_43cd3f60e9.jpeg\n/uploads/big_davidandthespidersper011_2cef9d8735.jpeg\n/uploads/maxresdefault_c1369083db.jpeg\n/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg\n/uploads/d17ab991_15c3_47ca_b1fb_a26f934df98a_1_f2bebed5f8.jpeg\n/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg\n/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg\n/uploads/280x178_2_6598614535.jpeg\n/uploads/8bf194589919a057d7e55e6e0bc38735_0978fd8db5.jpeg\n/uploads/3a98ad3e71cfbedb0b2466370045316b_1_784d43f041.jpeg\n/uploads/Laurie_Anderson_Heart_of_a_Dog_3_c372653d1e.jpeg\n/uploads/maxresdefault_205d90151c.jpeg\n/uploads/zagruzhennoe_c6067b77eb.jpeg\n/uploads/Screen_Shot_2017_01_04_at_17_16_53_252ea5e2ed.png\n/uploads/maxresdefault_1_612cb16fc7.jpeg\n/uploads/maxresdefault_2_93b16a93b2.jpeg\n/uploads/zagruzhennoe_1_a1e063a238.jpeg\n/uploads/e36bad4f2265_ba51cc6359.jpeg\n/uploads/cairo_city_16051300_02_03_06_Still003_cabb6565ed.jpeg\n/uploads/maxresdefault_3_6405ad0751.jpeg\n/uploads/maxresdefault_4_ec1bd9b10e.jpeg\n/uploads/088af76dd77ab1a163a5383e7e7e7d54_99e2e11589.jpeg\n/uploads/a53ab962_077a_4070_ac84_c17147e8fb16_1_4e37b08263.jpeg\n/uploads/unnamed_359b8cf568.jpeg\n/uploads/FBD_5_B97_D_D7_D5_47_CE_8_BB_6_2_EB_7_F984930_B_cx0_cy4_cw0_w1080_h608_4389f95b4f.jpeg\n/uploads/280x178_2_c754a5b367.jpeg\n/uploads/upload_TASS_1208585_pic905_895x505_34010_8e95098253.jpeg\n/uploads/man_f_3d0de1e8ca.jpeg\n/uploads/zagruzhennoe_efde9fa49e.jpeg\n/uploads/p520_1230881_81aa5bbd41.jpeg\n/uploads/f7946f5351da49b8141e7a11123070cc_0bb6969ffa.jpeg\n/uploads/24fcf0b4ded34dbc8a6792d7fd39_44a7662e50.jpeg\n/uploads/43cfd54bcf44422999d5197f24db_b750bba458.jpeg\n/uploads/440796_ffb2d02a21.jpeg\n/uploads/zagruzhennoe_06c31828c6.jpeg\n/uploads/1062889_600_29c813e7bb.jpeg\n/uploads/f63d8e42d0fa44f184c69576f77a_19a34fb789.jpeg\n/uploads/600x380_29e69f9cf7.jpeg\n/uploads/sddefault_e815c40fed.jpeg\n/uploads/kinopoisk_ru_Stockholm_2_C_My_Love_3458597_125b341b3c.jpeg\n/uploads/maxresdefault_04027c182c.jpeg\n/uploads/0001_76c25905da.jpeg\n/uploads/challenge_6_2000x869_51ced1214b.jpeg\n/uploads/rem_koolhaas_in_venice_2014_image_tomas_koolhaas_c88566c140.jpeg\n/uploads/zagruzhennoe_1_2e377c1bed.jpeg\n/uploads/tetragrammaton_3032831_7345d2be9b.jpeg\n/uploads/mamleev_1_1200x630_80075a241e.jpeg\n/uploads/95182_c923d140df.png\n/uploads/280x178_2_f53364a363.jpeg\n/uploads/2_43_1009401e3b.jpeg\n/uploads/twothree_1_2000x869_b84e29b069.jpeg\n/uploads/a3365cbf4d37ce2be6377cb29240e015_e54f928a4a.jpeg\n/uploads/Trailer_Thumbnail_v2_f93b84bae3.jpeg\n/uploads/1005x558_20180611112745a84cdb6853_207389185c.jpeg\n/uploads/zagruzhennoe_0452298b2b.jpeg\n/uploads/zagruzhennoe_1_abf766fea9.jpeg\n/uploads/C1_Vu_Acsdz_MY_727ba0c04a.jpeg\n/uploads/zagruzhennoe_2_9d38eea933.jpeg\n/uploads/2_AQ_sbvju_Rqpu_UP_9m_BQ_y_IXF_usg1_Q_vjae_Avq_Eovvs_I1_M_81fb0dc307.jpeg\n/uploads/word1_f7db41ec2c.jpeg\n/uploads/d3662037577f2479bbe5d96f2ae17b77e85933c22e50f4be481bbd69d90e1a5f_fdc1f29e58.jpeg\n/uploads/zagruzhennoe_3_a42111e53f.jpeg\n/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg\n/uploads/0_b389b72805.jpeg\n/uploads/content_Mountain_Movie_201caecdbf.jpeg\n/uploads/unnamed_e16c34a51a.jpeg\n/uploads/drib_1_1200x630_61aeb78757.jpeg\n/uploads/280x178_2_622e3d04db.jpeg\n/uploads/zagruzhennoe_4_729e7917e3.jpeg\n/uploads/FDC_3i7d_Ce_Zc2_Mk_RGLKP_f_KURIFG_gyc_X5_P3g4_B0wx8c_E_52a0fa86d7.jpeg\n/uploads/zagruzhennoe_5_259295f4a9.jpeg",
        "provider": "local",
        "provider_metadata": null,
        "created_at": "2020-11-23T14:11:57.313Z",
        "updated_at": "2020-11-23T14:11:57.313Z"
    }
},
{
    "id": 2,
    "nameRU": "All Tomorrow's Parties",
    "nameEN": "All Tomorrow's Parties",
    "director": " Джонатан Кауэтт",
    "country": "Великобритания",
    "year": "2009",
    "duration": 82,
    "description": "Хроники британского фестиваля, который первым нарушил монополию «Гластонбери», «Ридинга» и прочих пивных сборищ в чистом поле — и с тех пор прослыл одним из самых независимых и принципиальных. ATP из года в год проходит на базе отдыха в английской глуши, где артисты и их поклонники живут в одинаковых номерах, не бывает коммерческих спонсоров, программу составляют приглашенные кураторы (в разное время ими были Ник Кейв, Belle & Sebastian, Sonic Youth и даже Мэтт Грейнинг). И, главное, где не любят вздорных людей — основатель фестиваля Барри Хоган однажды сказал, что никогда больше не станет иметь дело с группой Killing Joke, «потому что они му...аки». Эта демократичность сказалась и на фильме: часть съемок сделана адептами фестиваля на мобильный телефон.",
    "trailerLink": "https://www.youtube.com/watch?v=D5fBhbEJxEU",
    "created_at": "2020-11-23T14:15:19.238Z",
    "updated_at": "2020-11-23T14:15:19.238Z",
    "image": {
        "id": 2,
        "name": "all-tommoros-parties",
        "alternativeText": "",
        "caption": "",
        "width": 699,
        "height": 266,
        "formats": {
            "thumbnail": {
                "hash": "thumbnail_all_tommoros_parties_33a125248d",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 245,
                "height": 93,
                "size": 10.33,
                "path": null,
                "url": "/uploads/thumbnail_all_tommoros_parties_33a125248d.jpeg"
            },
            "small": {
                "hash": "small_all_tommoros_parties_33a125248d",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 500,
                "height": 190,
                "size": 35.24,
                "path": null,
                "url": "/uploads/small_all_tommoros_parties_33a125248d.jpeg"
            }
        },
        "hash": "all_tommoros_parties_33a125248d",
        "ext": ".jpeg",
        "mime": "image/jpeg",
        "size": 67.06,
        "url": "/uploads/all_tommoros_parties_33a125248d.jpeg",
        "previewUrl": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg\n/uploads/all_tommoros_parties_33a125248d.jpeg\n/uploads/blur_a43fcf463d.jpeg\n/uploads/zagruzhennoe_113f557116.jpeg\n/uploads/taqwacore2_2f487d2e74.jpeg\n/uploads/881707734_640_d6a3a43358.jpeg\n/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg\n/uploads/images_5bfcbf36e6.jpeg\n/uploads/zagruzhennoe_1_fd5faff237.jpeg\n/uploads/images_244e1fd56f.jpeg\n/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg\n/uploads/590x400_2eccd40a93.jpeg\n/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg\n/uploads/1_6a9e0669ca.jpeg\n/uploads/zagruzhennoe_cba9c9f900.jpeg\n/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg\n/uploads/280x178_2_f2eee77cae.jpeg\n/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg\n/uploads/Backyard_327_3_2151980c5c.jpeg\n/uploads/zagruzhennoe_2_5f87844408.jpeg\n/uploads/maxresdefault_505b3fa578.jpeg\n/uploads/b1_3385dd88fe.jpeg\n/uploads/9c3adee646635c6aa56a229dbe9b9779_original_8b382dc3ec.jpeg\n/uploads/740x457_2016090618140134690b5589_07f872345d.jpeg\n/uploads/667708311_1280x720_558f3de42b.jpeg\n/uploads/inni_13_fb13830e94.jpeg\n/uploads/AAACDZTO_o_OJ_yo_Sf_EXLJ_5_J1u_J_r7j_FNH_vrcn_OAU_a_UX_s_Ljl6t_DBSZ_7_YPUDVPA_i_Cs1_Cje_y_Hb9_M8zvf6_DX_n_Qtux_Qa_SD_r_I_ea7df93d26.jpeg\n/uploads/amma_lo_fi_739aeb0890.jpeg\n/uploads/750x485_28d08c49c4.jpeg\n/uploads/zagruzhennoe_53d33dc9df.jpeg\n/uploads/TEENAGE_3_600_3b1cce5358.jpeg\n/uploads/unnamed_aa708a91a1.jpeg\n/uploads/133633090dfcb40e8e87ecf6cb52c419_c534c1283c.jpeg\n/uploads/zagruzhennoe_1_38e987f181.jpeg\n/uploads/Shut_Up_Hits_poster_f5bb0d6e83.jpeg\n/uploads/Art_Cinema_Webslug_Mr_Baker_de10be970f.jpeg\n/uploads/embed_still_available_now_8e4038f1f6.jpeg\n/uploads/704543546_960_d6340bce70.jpeg\n/uploads/Oil_City_Confidential_676986530_large_652c54fa63.jpeg\n/uploads/5a8db56aa48049529df13a2d2ab0_be34c45c62.jpeg\n/uploads/zagruzhennoe_58e5329700.jpeg\n/uploads/zagruzhennoe_1_9994d6db60.jpeg\n/uploads/BM_uc_YK_d_P4jn9lp_QF_7_Ew8z8_micr_f849e20df3.jpeg\n/uploads/ORCHARD_888003020894_Full_Image_Gallery_Cover_en_US_1551076193509_UY_500_UX_667_RI_VX_n_Xh_LAZXKUVW_a_NQPF_j2_CR_q_Ehjv_ERHT_od_TTW_0a20f1d30d.jpeg\n/uploads/zagruzhennoe_2_17bcd9ceff.jpeg\n/uploads/zagruzhennoe_3_312a12853b.jpeg\n/uploads/750x485_a07b1b2585.jpeg\n/uploads/14e1f2912a2a169b11820e3163df6c69_a01189ce50.jpeg\n/uploads/unnamed_0256d7127c.jpeg\n/uploads/zagruzhennoe_7326b1cb5f.jpeg\n/uploads/15786_oldschool_renegades_docu_c54f63dfc1.jpeg\n/uploads/552242179_1280x720_66bc43b289.jpeg\n/uploads/Super_Duper_Alice_Cooper_2014_8b1641fbaf.jpeg\n/uploads/orig_bc3e53efa8.jpeg\n/uploads/zagruzhennoe_1_1817cd23a2.jpeg\n/uploads/zagruzhennoe_2_c709860078.jpeg\n/uploads/zagruzhennoe_3_08092046af.jpeg\n/uploads/images_0bbc035397.jpeg\n/uploads/77e84d33e7f526823bd23362c6e66261_a9c0fb3836.jpeg\n/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png\n/uploads/Snimok_ekrana_2020_12_03_v_16_00_28_a851176a2d.png\n/uploads/Werewolves_Across_America_3f48106062.jpeg\n/uploads/zagruzhennoe_edcf93eb96.jpeg\n/uploads/maxresdefault_88702f9bc0.jpeg\n/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg\n/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg\n/uploads/zagruzhennoe_1_3b8b337f95.jpeg\n/uploads/unnamed_0bd470956a.jpeg\n/uploads/705753536_1280x720_3f3ec9830f.jpeg\n/uploads/wyr_139_03_7a244dbd6e.jpeg\n/uploads/zagruzhennoe_b22b6e2887.jpeg\n/uploads/images_d789f0a61a.jpeg\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_913b905856.png\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_707fba4597.png\n/uploads/maxresdefault_21f787cdf3.jpeg\n/uploads/maxresdefault_1_0cda104e49.jpeg\n/uploads/maxresdefault_2_3072271808.jpeg\n/uploads/images_f324307a7f.jpeg\n/uploads/unnamed_4f99c0fa1e.jpeg\n/uploads/zagruzhennoe_a32e347316.jpeg\n/uploads/maxresdefault_164e1c974c.jpeg\n/uploads/b80915f7_d774_4536_9e79_450578a40ad4_9131a274_04cd1fb520.jpeg\n/uploads/12032_770x433_74026cdeb6.jpeg\n/uploads/zagruzhennoe_1_70b0c1a682.jpeg\n/uploads/maxresdefault_1_5bef2a2c64.jpeg\n/uploads/750x485_6aa18b04bb.jpeg\n/uploads/3_29_4b376917c9.jpeg\n/uploads/upload_9120ff30_fa73_11e5_b942_b366214b09de_ff4e9a16b9.jpeg\n/uploads/zagruzhennoe_2_946c91c6d8.jpeg\n/uploads/maxresdefault_2_4747cae75c.jpeg\n/uploads/den_unge_zlatan_aca9a6118e.jpeg\n/uploads/zagruzhennoe_3_6dab3dce0f.jpeg\n/uploads/zagruzhennoe_4_63633dbd00.jpeg\n/uploads/81c_6f_Ledf_L_RI_13c54761cc.jpeg\n/uploads/zagruzhennoe_8e5b14a44a.jpeg\n/uploads/zagruzhennoe_1_1aee5f7ecf.jpeg\n/uploads/mqdefault_14f34c8254.jpeg\n/uploads/zagruzhennoe_2_d22375c7cf.jpeg\n/uploads/zagruzhennoe_3_c78d64a9f0.jpeg\n/uploads/zagruzhennoe_4_43cd3f60e9.jpeg\n/uploads/big_davidandthespidersper011_2cef9d8735.jpeg\n/uploads/maxresdefault_c1369083db.jpeg\n/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg\n/uploads/d17ab991_15c3_47ca_b1fb_a26f934df98a_1_f2bebed5f8.jpeg\n/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg\n/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg\n/uploads/280x178_2_6598614535.jpeg\n/uploads/8bf194589919a057d7e55e6e0bc38735_0978fd8db5.jpeg\n/uploads/3a98ad3e71cfbedb0b2466370045316b_1_784d43f041.jpeg\n/uploads/Laurie_Anderson_Heart_of_a_Dog_3_c372653d1e.jpeg\n/uploads/maxresdefault_205d90151c.jpeg\n/uploads/zagruzhennoe_c6067b77eb.jpeg\n/uploads/Screen_Shot_2017_01_04_at_17_16_53_252ea5e2ed.png\n/uploads/maxresdefault_1_612cb16fc7.jpeg\n/uploads/maxresdefault_2_93b16a93b2.jpeg\n/uploads/zagruzhennoe_1_a1e063a238.jpeg\n/uploads/e36bad4f2265_ba51cc6359.jpeg\n/uploads/cairo_city_16051300_02_03_06_Still003_cabb6565ed.jpeg\n/uploads/maxresdefault_3_6405ad0751.jpeg\n/uploads/maxresdefault_4_ec1bd9b10e.jpeg\n/uploads/088af76dd77ab1a163a5383e7e7e7d54_99e2e11589.jpeg\n/uploads/a53ab962_077a_4070_ac84_c17147e8fb16_1_4e37b08263.jpeg\n/uploads/unnamed_359b8cf568.jpeg\n/uploads/FBD_5_B97_D_D7_D5_47_CE_8_BB_6_2_EB_7_F984930_B_cx0_cy4_cw0_w1080_h608_4389f95b4f.jpeg\n/uploads/280x178_2_c754a5b367.jpeg\n/uploads/upload_TASS_1208585_pic905_895x505_34010_8e95098253.jpeg\n/uploads/man_f_3d0de1e8ca.jpeg\n/uploads/zagruzhennoe_efde9fa49e.jpeg\n/uploads/p520_1230881_81aa5bbd41.jpeg\n/uploads/f7946f5351da49b8141e7a11123070cc_0bb6969ffa.jpeg\n/uploads/24fcf0b4ded34dbc8a6792d7fd39_44a7662e50.jpeg\n/uploads/43cfd54bcf44422999d5197f24db_b750bba458.jpeg\n/uploads/440796_ffb2d02a21.jpeg\n/uploads/zagruzhennoe_06c31828c6.jpeg\n/uploads/1062889_600_29c813e7bb.jpeg\n/uploads/f63d8e42d0fa44f184c69576f77a_19a34fb789.jpeg\n/uploads/600x380_29e69f9cf7.jpeg\n/uploads/sddefault_e815c40fed.jpeg\n/uploads/kinopoisk_ru_Stockholm_2_C_My_Love_3458597_125b341b3c.jpeg\n/uploads/maxresdefault_04027c182c.jpeg\n/uploads/0001_76c25905da.jpeg\n/uploads/challenge_6_2000x869_51ced1214b.jpeg\n/uploads/rem_koolhaas_in_venice_2014_image_tomas_koolhaas_c88566c140.jpeg\n/uploads/zagruzhennoe_1_2e377c1bed.jpeg\n/uploads/tetragrammaton_3032831_7345d2be9b.jpeg\n/uploads/mamleev_1_1200x630_80075a241e.jpeg\n/uploads/95182_c923d140df.png\n/uploads/280x178_2_f53364a363.jpeg\n/uploads/2_43_1009401e3b.jpeg\n/uploads/twothree_1_2000x869_b84e29b069.jpeg\n/uploads/a3365cbf4d37ce2be6377cb29240e015_e54f928a4a.jpeg\n/uploads/Trailer_Thumbnail_v2_f93b84bae3.jpeg\n/uploads/1005x558_20180611112745a84cdb6853_207389185c.jpeg\n/uploads/zagruzhennoe_0452298b2b.jpeg\n/uploads/zagruzhennoe_1_abf766fea9.jpeg\n/uploads/C1_Vu_Acsdz_MY_727ba0c04a.jpeg\n/uploads/zagruzhennoe_2_9d38eea933.jpeg\n/uploads/2_AQ_sbvju_Rqpu_UP_9m_BQ_y_IXF_usg1_Q_vjae_Avq_Eovvs_I1_M_81fb0dc307.jpeg\n/uploads/word1_f7db41ec2c.jpeg\n/uploads/d3662037577f2479bbe5d96f2ae17b77e85933c22e50f4be481bbd69d90e1a5f_fdc1f29e58.jpeg\n/uploads/zagruzhennoe_3_a42111e53f.jpeg\n/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg\n/uploads/0_b389b72805.jpeg\n/uploads/content_Mountain_Movie_201caecdbf.jpeg\n/uploads/unnamed_e16c34a51a.jpeg\n/uploads/drib_1_1200x630_61aeb78757.jpeg\n/uploads/280x178_2_622e3d04db.jpeg\n/uploads/zagruzhennoe_4_729e7917e3.jpeg\n/uploads/FDC_3i7d_Ce_Zc2_Mk_RGLKP_f_KURIFG_gyc_X5_P3g4_B0wx8c_E_52a0fa86d7.jpeg\n/uploads/zagruzhennoe_5_259295f4a9.jpeg",
        "provider": "local",
        "provider_metadata": null,
        "created_at": "2020-11-23T14:14:08.595Z",
        "updated_at": "2020-11-23T14:14:08.595Z"
    }
},
{
    "id": 3,
    "nameRU": " Без обратного пути",
    "nameEN": "No Distance Left to Run",
    "director": "Уилл Лавлейс, Дилан Сотерн",
    "country": "Великобритания",
    "year": "2010",
    "duration": 104,
    "description": "Затеянный по такому подозрительному поводу, как реюнион Blur в 2009-м году фильм начисто лишен присущего моменту пафоса и выхолощенности речей. Вернее, что-то похожее неизбежно возникает, когда ты видишь, как забитый до отказа Гайд-парк как в последний раз ревет «Song 2», но это лишь буквальное свидетельство того, что Blur — великая группа. К счастью, помимо прямых и косвенных свидетельств этого, в «No Distance Left to Run» хватает острых углов, неловких моментов и всего того сора, из которого рождаются по-настоящему отличные группы: помимо важных, но общеизвестных моментов (вроде соперничества с Oasis за первенство в том же бритпопе) визуализируются и те, что всегда оставались за кадром: наркотическая зависимость, неутихающие костры амбиций, ревность, обиды, слава — и все это блестяще снято на фоне истории того, что вообще происходило в Британии времен Блэра.",
    "trailerLink": "https://www.youtube.com/watch?v=6iYxdghpJZY",
    "created_at": "2020-11-23T14:17:23.257Z",
    "updated_at": "2020-11-23T14:17:23.257Z",
    "image": {
        "id": 3,
        "name": "blur",
        "alternativeText": "",
        "caption": "",
        "width": 460,
        "height": 298,
        "formats": {
            "thumbnail": {
                "hash": "thumbnail_blur_a43fcf463d",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 241,
                "height": 156,
                "size": 8.32,
                "path": null,
                "url": "/uploads/thumbnail_blur_a43fcf463d.jpeg"
            }
        },
        "hash": "blur_a43fcf463d",
        "ext": ".jpeg",
        "mime": "image/jpeg",
        "size": 21.07,
        "url": "/uploads/blur_a43fcf463d.jpeg",
        "previewUrl": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg\n/uploads/all_tommoros_parties_33a125248d.jpeg\n/uploads/blur_a43fcf463d.jpeg\n/uploads/zagruzhennoe_113f557116.jpeg\n/uploads/taqwacore2_2f487d2e74.jpeg\n/uploads/881707734_640_d6a3a43358.jpeg\n/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg\n/uploads/images_5bfcbf36e6.jpeg\n/uploads/zagruzhennoe_1_fd5faff237.jpeg\n/uploads/images_244e1fd56f.jpeg\n/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg\n/uploads/590x400_2eccd40a93.jpeg\n/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg\n/uploads/1_6a9e0669ca.jpeg\n/uploads/zagruzhennoe_cba9c9f900.jpeg\n/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg\n/uploads/280x178_2_f2eee77cae.jpeg\n/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg\n/uploads/Backyard_327_3_2151980c5c.jpeg\n/uploads/zagruzhennoe_2_5f87844408.jpeg\n/uploads/maxresdefault_505b3fa578.jpeg\n/uploads/b1_3385dd88fe.jpeg\n/uploads/9c3adee646635c6aa56a229dbe9b9779_original_8b382dc3ec.jpeg\n/uploads/740x457_2016090618140134690b5589_07f872345d.jpeg\n/uploads/667708311_1280x720_558f3de42b.jpeg\n/uploads/inni_13_fb13830e94.jpeg\n/uploads/AAACDZTO_o_OJ_yo_Sf_EXLJ_5_J1u_J_r7j_FNH_vrcn_OAU_a_UX_s_Ljl6t_DBSZ_7_YPUDVPA_i_Cs1_Cje_y_Hb9_M8zvf6_DX_n_Qtux_Qa_SD_r_I_ea7df93d26.jpeg\n/uploads/amma_lo_fi_739aeb0890.jpeg\n/uploads/750x485_28d08c49c4.jpeg\n/uploads/zagruzhennoe_53d33dc9df.jpeg\n/uploads/TEENAGE_3_600_3b1cce5358.jpeg\n/uploads/unnamed_aa708a91a1.jpeg\n/uploads/133633090dfcb40e8e87ecf6cb52c419_c534c1283c.jpeg\n/uploads/zagruzhennoe_1_38e987f181.jpeg\n/uploads/Shut_Up_Hits_poster_f5bb0d6e83.jpeg\n/uploads/Art_Cinema_Webslug_Mr_Baker_de10be970f.jpeg\n/uploads/embed_still_available_now_8e4038f1f6.jpeg\n/uploads/704543546_960_d6340bce70.jpeg\n/uploads/Oil_City_Confidential_676986530_large_652c54fa63.jpeg\n/uploads/5a8db56aa48049529df13a2d2ab0_be34c45c62.jpeg\n/uploads/zagruzhennoe_58e5329700.jpeg\n/uploads/zagruzhennoe_1_9994d6db60.jpeg\n/uploads/BM_uc_YK_d_P4jn9lp_QF_7_Ew8z8_micr_f849e20df3.jpeg\n/uploads/ORCHARD_888003020894_Full_Image_Gallery_Cover_en_US_1551076193509_UY_500_UX_667_RI_VX_n_Xh_LAZXKUVW_a_NQPF_j2_CR_q_Ehjv_ERHT_od_TTW_0a20f1d30d.jpeg\n/uploads/zagruzhennoe_2_17bcd9ceff.jpeg\n/uploads/zagruzhennoe_3_312a12853b.jpeg\n/uploads/750x485_a07b1b2585.jpeg\n/uploads/14e1f2912a2a169b11820e3163df6c69_a01189ce50.jpeg\n/uploads/unnamed_0256d7127c.jpeg\n/uploads/zagruzhennoe_7326b1cb5f.jpeg\n/uploads/15786_oldschool_renegades_docu_c54f63dfc1.jpeg\n/uploads/552242179_1280x720_66bc43b289.jpeg\n/uploads/Super_Duper_Alice_Cooper_2014_8b1641fbaf.jpeg\n/uploads/orig_bc3e53efa8.jpeg\n/uploads/zagruzhennoe_1_1817cd23a2.jpeg\n/uploads/zagruzhennoe_2_c709860078.jpeg\n/uploads/zagruzhennoe_3_08092046af.jpeg\n/uploads/images_0bbc035397.jpeg\n/uploads/77e84d33e7f526823bd23362c6e66261_a9c0fb3836.jpeg\n/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png\n/uploads/Snimok_ekrana_2020_12_03_v_16_00_28_a851176a2d.png\n/uploads/Werewolves_Across_America_3f48106062.jpeg\n/uploads/zagruzhennoe_edcf93eb96.jpeg\n/uploads/maxresdefault_88702f9bc0.jpeg\n/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg\n/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg\n/uploads/zagruzhennoe_1_3b8b337f95.jpeg\n/uploads/unnamed_0bd470956a.jpeg\n/uploads/705753536_1280x720_3f3ec9830f.jpeg\n/uploads/wyr_139_03_7a244dbd6e.jpeg\n/uploads/zagruzhennoe_b22b6e2887.jpeg\n/uploads/images_d789f0a61a.jpeg\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_913b905856.png\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_707fba4597.png\n/uploads/maxresdefault_21f787cdf3.jpeg\n/uploads/maxresdefault_1_0cda104e49.jpeg\n/uploads/maxresdefault_2_3072271808.jpeg\n/uploads/images_f324307a7f.jpeg\n/uploads/unnamed_4f99c0fa1e.jpeg\n/uploads/zagruzhennoe_a32e347316.jpeg\n/uploads/maxresdefault_164e1c974c.jpeg\n/uploads/b80915f7_d774_4536_9e79_450578a40ad4_9131a274_04cd1fb520.jpeg\n/uploads/12032_770x433_74026cdeb6.jpeg\n/uploads/zagruzhennoe_1_70b0c1a682.jpeg\n/uploads/maxresdefault_1_5bef2a2c64.jpeg\n/uploads/750x485_6aa18b04bb.jpeg\n/uploads/3_29_4b376917c9.jpeg\n/uploads/upload_9120ff30_fa73_11e5_b942_b366214b09de_ff4e9a16b9.jpeg\n/uploads/zagruzhennoe_2_946c91c6d8.jpeg\n/uploads/maxresdefault_2_4747cae75c.jpeg\n/uploads/den_unge_zlatan_aca9a6118e.jpeg\n/uploads/zagruzhennoe_3_6dab3dce0f.jpeg\n/uploads/zagruzhennoe_4_63633dbd00.jpeg\n/uploads/81c_6f_Ledf_L_RI_13c54761cc.jpeg\n/uploads/zagruzhennoe_8e5b14a44a.jpeg\n/uploads/zagruzhennoe_1_1aee5f7ecf.jpeg\n/uploads/mqdefault_14f34c8254.jpeg\n/uploads/zagruzhennoe_2_d22375c7cf.jpeg\n/uploads/zagruzhennoe_3_c78d64a9f0.jpeg\n/uploads/zagruzhennoe_4_43cd3f60e9.jpeg\n/uploads/big_davidandthespidersper011_2cef9d8735.jpeg\n/uploads/maxresdefault_c1369083db.jpeg\n/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg\n/uploads/d17ab991_15c3_47ca_b1fb_a26f934df98a_1_f2bebed5f8.jpeg\n/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg\n/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg\n/uploads/280x178_2_6598614535.jpeg\n/uploads/8bf194589919a057d7e55e6e0bc38735_0978fd8db5.jpeg\n/uploads/3a98ad3e71cfbedb0b2466370045316b_1_784d43f041.jpeg\n/uploads/Laurie_Anderson_Heart_of_a_Dog_3_c372653d1e.jpeg\n/uploads/maxresdefault_205d90151c.jpeg\n/uploads/zagruzhennoe_c6067b77eb.jpeg\n/uploads/Screen_Shot_2017_01_04_at_17_16_53_252ea5e2ed.png\n/uploads/maxresdefault_1_612cb16fc7.jpeg\n/uploads/maxresdefault_2_93b16a93b2.jpeg\n/uploads/zagruzhennoe_1_a1e063a238.jpeg\n/uploads/e36bad4f2265_ba51cc6359.jpeg\n/uploads/cairo_city_16051300_02_03_06_Still003_cabb6565ed.jpeg\n/uploads/maxresdefault_3_6405ad0751.jpeg\n/uploads/maxresdefault_4_ec1bd9b10e.jpeg\n/uploads/088af76dd77ab1a163a5383e7e7e7d54_99e2e11589.jpeg\n/uploads/a53ab962_077a_4070_ac84_c17147e8fb16_1_4e37b08263.jpeg\n/uploads/unnamed_359b8cf568.jpeg\n/uploads/FBD_5_B97_D_D7_D5_47_CE_8_BB_6_2_EB_7_F984930_B_cx0_cy4_cw0_w1080_h608_4389f95b4f.jpeg\n/uploads/280x178_2_c754a5b367.jpeg\n/uploads/upload_TASS_1208585_pic905_895x505_34010_8e95098253.jpeg\n/uploads/man_f_3d0de1e8ca.jpeg\n/uploads/zagruzhennoe_efde9fa49e.jpeg\n/uploads/p520_1230881_81aa5bbd41.jpeg\n/uploads/f7946f5351da49b8141e7a11123070cc_0bb6969ffa.jpeg\n/uploads/24fcf0b4ded34dbc8a6792d7fd39_44a7662e50.jpeg\n/uploads/43cfd54bcf44422999d5197f24db_b750bba458.jpeg\n/uploads/440796_ffb2d02a21.jpeg\n/uploads/zagruzhennoe_06c31828c6.jpeg\n/uploads/1062889_600_29c813e7bb.jpeg\n/uploads/f63d8e42d0fa44f184c69576f77a_19a34fb789.jpeg\n/uploads/600x380_29e69f9cf7.jpeg\n/uploads/sddefault_e815c40fed.jpeg\n/uploads/kinopoisk_ru_Stockholm_2_C_My_Love_3458597_125b341b3c.jpeg\n/uploads/maxresdefault_04027c182c.jpeg\n/uploads/0001_76c25905da.jpeg\n/uploads/challenge_6_2000x869_51ced1214b.jpeg\n/uploads/rem_koolhaas_in_venice_2014_image_tomas_koolhaas_c88566c140.jpeg\n/uploads/zagruzhennoe_1_2e377c1bed.jpeg\n/uploads/tetragrammaton_3032831_7345d2be9b.jpeg\n/uploads/mamleev_1_1200x630_80075a241e.jpeg\n/uploads/95182_c923d140df.png\n/uploads/280x178_2_f53364a363.jpeg\n/uploads/2_43_1009401e3b.jpeg\n/uploads/twothree_1_2000x869_b84e29b069.jpeg\n/uploads/a3365cbf4d37ce2be6377cb29240e015_e54f928a4a.jpeg\n/uploads/Trailer_Thumbnail_v2_f93b84bae3.jpeg\n/uploads/1005x558_20180611112745a84cdb6853_207389185c.jpeg\n/uploads/zagruzhennoe_0452298b2b.jpeg\n/uploads/zagruzhennoe_1_abf766fea9.jpeg\n/uploads/C1_Vu_Acsdz_MY_727ba0c04a.jpeg\n/uploads/zagruzhennoe_2_9d38eea933.jpeg\n/uploads/2_AQ_sbvju_Rqpu_UP_9m_BQ_y_IXF_usg1_Q_vjae_Avq_Eovvs_I1_M_81fb0dc307.jpeg\n/uploads/word1_f7db41ec2c.jpeg\n/uploads/d3662037577f2479bbe5d96f2ae17b77e85933c22e50f4be481bbd69d90e1a5f_fdc1f29e58.jpeg\n/uploads/zagruzhennoe_3_a42111e53f.jpeg\n/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg\n/uploads/0_b389b72805.jpeg\n/uploads/content_Mountain_Movie_201caecdbf.jpeg\n/uploads/unnamed_e16c34a51a.jpeg\n/uploads/drib_1_1200x630_61aeb78757.jpeg\n/uploads/280x178_2_622e3d04db.jpeg\n/uploads/zagruzhennoe_4_729e7917e3.jpeg\n/uploads/FDC_3i7d_Ce_Zc2_Mk_RGLKP_f_KURIFG_gyc_X5_P3g4_B0wx8c_E_52a0fa86d7.jpeg\n/uploads/zagruzhennoe_5_259295f4a9.jpeg",
        "provider": "local",
        "provider_metadata": null,
        "created_at": "2020-11-23T14:17:01.702Z",
        "updated_at": "2020-11-23T14:17:01.702Z"
    }
},
{
    "id": 4,
    "nameRU": "Bassweight",
    "nameEN": "Bassweight",
    "director": "Сурид Хассан",
    "country": "Великобритания",
    "year": "2008",
    "duration": 61,
    "description": "Фильм про самую многообещающую музыкальную субкультуру нулевых использует тот же ассоциативный ряд, что и искомая музыка: низкое, затянутое облаками небо южного Лондона, приглушенный свет, массивный бас, удары которого отдаются в грудной клетке, негромкая речь людей, предпочитающих не показывать свои лица. Впрочем, все ключевые для дабстепа люди здесь, конечно, имеются — Бенга, Скрим, Kode 9, Мэри Энн Хоббс и прочие, а география не сводится к одному только Кройдону — следом за исторической родиной дабстепа режиссер фильма исследует и другие очаги возгорания, включая Бразилию и Японию.",
    "trailerLink": "https://www.youtube.com/watch?v=dgSyC6me-jQ",
    "created_at": "2020-12-02T16:48:01.794Z",
    "updated_at": "2020-12-02T16:48:01.794Z",
    "image": {
        "id": 4,
        "name": "загруженное",
        "alternativeText": "",
        "caption": "",
        "width": 276,
        "height": 183,
        "formats": {
            "thumbnail": {
                "hash": "thumbnail_zagruzhennoe_113f557116",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 235,
                "height": 156,
                "size": 6.59,
                "path": null,
                "url": "/uploads/thumbnail_zagruzhennoe_113f557116.jpeg"
            }
        },
        "hash": "zagruzhennoe_113f557116",
        "ext": ".jpeg",
        "mime": "image/jpeg",
        "size": 7.01,
        "url": "/uploads/zagruzhennoe_113f557116.jpeg",
        "previewUrl": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg\n/uploads/all_tommoros_parties_33a125248d.jpeg\n/uploads/blur_a43fcf463d.jpeg\n/uploads/zagruzhennoe_113f557116.jpeg\n/uploads/taqwacore2_2f487d2e74.jpeg\n/uploads/881707734_640_d6a3a43358.jpeg\n/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg\n/uploads/images_5bfcbf36e6.jpeg\n/uploads/zagruzhennoe_1_fd5faff237.jpeg\n/uploads/images_244e1fd56f.jpeg\n/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg\n/uploads/590x400_2eccd40a93.jpeg\n/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg\n/uploads/1_6a9e0669ca.jpeg\n/uploads/zagruzhennoe_cba9c9f900.jpeg\n/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg\n/uploads/280x178_2_f2eee77cae.jpeg\n/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg\n/uploads/Backyard_327_3_2151980c5c.jpeg\n/uploads/zagruzhennoe_2_5f87844408.jpeg\n/uploads/maxresdefault_505b3fa578.jpeg\n/uploads/b1_3385dd88fe.jpeg\n/uploads/9c3adee646635c6aa56a229dbe9b9779_original_8b382dc3ec.jpeg\n/uploads/740x457_2016090618140134690b5589_07f872345d.jpeg\n/uploads/667708311_1280x720_558f3de42b.jpeg\n/uploads/inni_13_fb13830e94.jpeg\n/uploads/AAACDZTO_o_OJ_yo_Sf_EXLJ_5_J1u_J_r7j_FNH_vrcn_OAU_a_UX_s_Ljl6t_DBSZ_7_YPUDVPA_i_Cs1_Cje_y_Hb9_M8zvf6_DX_n_Qtux_Qa_SD_r_I_ea7df93d26.jpeg\n/uploads/amma_lo_fi_739aeb0890.jpeg\n/uploads/750x485_28d08c49c4.jpeg\n/uploads/zagruzhennoe_53d33dc9df.jpeg\n/uploads/TEENAGE_3_600_3b1cce5358.jpeg\n/uploads/unnamed_aa708a91a1.jpeg\n/uploads/133633090dfcb40e8e87ecf6cb52c419_c534c1283c.jpeg\n/uploads/zagruzhennoe_1_38e987f181.jpeg\n/uploads/Shut_Up_Hits_poster_f5bb0d6e83.jpeg\n/uploads/Art_Cinema_Webslug_Mr_Baker_de10be970f.jpeg\n/uploads/embed_still_available_now_8e4038f1f6.jpeg\n/uploads/704543546_960_d6340bce70.jpeg\n/uploads/Oil_City_Confidential_676986530_large_652c54fa63.jpeg\n/uploads/5a8db56aa48049529df13a2d2ab0_be34c45c62.jpeg\n/uploads/zagruzhennoe_58e5329700.jpeg\n/uploads/zagruzhennoe_1_9994d6db60.jpeg\n/uploads/BM_uc_YK_d_P4jn9lp_QF_7_Ew8z8_micr_f849e20df3.jpeg\n/uploads/ORCHARD_888003020894_Full_Image_Gallery_Cover_en_US_1551076193509_UY_500_UX_667_RI_VX_n_Xh_LAZXKUVW_a_NQPF_j2_CR_q_Ehjv_ERHT_od_TTW_0a20f1d30d.jpeg\n/uploads/zagruzhennoe_2_17bcd9ceff.jpeg\n/uploads/zagruzhennoe_3_312a12853b.jpeg\n/uploads/750x485_a07b1b2585.jpeg\n/uploads/14e1f2912a2a169b11820e3163df6c69_a01189ce50.jpeg\n/uploads/unnamed_0256d7127c.jpeg\n/uploads/zagruzhennoe_7326b1cb5f.jpeg\n/uploads/15786_oldschool_renegades_docu_c54f63dfc1.jpeg\n/uploads/552242179_1280x720_66bc43b289.jpeg\n/uploads/Super_Duper_Alice_Cooper_2014_8b1641fbaf.jpeg\n/uploads/orig_bc3e53efa8.jpeg\n/uploads/zagruzhennoe_1_1817cd23a2.jpeg\n/uploads/zagruzhennoe_2_c709860078.jpeg\n/uploads/zagruzhennoe_3_08092046af.jpeg\n/uploads/images_0bbc035397.jpeg\n/uploads/77e84d33e7f526823bd23362c6e66261_a9c0fb3836.jpeg\n/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png\n/uploads/Snimok_ekrana_2020_12_03_v_16_00_28_a851176a2d.png\n/uploads/Werewolves_Across_America_3f48106062.jpeg\n/uploads/zagruzhennoe_edcf93eb96.jpeg\n/uploads/maxresdefault_88702f9bc0.jpeg\n/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg\n/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg\n/uploads/zagruzhennoe_1_3b8b337f95.jpeg\n/uploads/unnamed_0bd470956a.jpeg\n/uploads/705753536_1280x720_3f3ec9830f.jpeg\n/uploads/wyr_139_03_7a244dbd6e.jpeg\n/uploads/zagruzhennoe_b22b6e2887.jpeg\n/uploads/images_d789f0a61a.jpeg\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_913b905856.png\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_707fba4597.png\n/uploads/maxresdefault_21f787cdf3.jpeg\n/uploads/maxresdefault_1_0cda104e49.jpeg\n/uploads/maxresdefault_2_3072271808.jpeg\n/uploads/images_f324307a7f.jpeg\n/uploads/unnamed_4f99c0fa1e.jpeg\n/uploads/zagruzhennoe_a32e347316.jpeg\n/uploads/maxresdefault_164e1c974c.jpeg\n/uploads/b80915f7_d774_4536_9e79_450578a40ad4_9131a274_04cd1fb520.jpeg\n/uploads/12032_770x433_74026cdeb6.jpeg\n/uploads/zagruzhennoe_1_70b0c1a682.jpeg\n/uploads/maxresdefault_1_5bef2a2c64.jpeg\n/uploads/750x485_6aa18b04bb.jpeg\n/uploads/3_29_4b376917c9.jpeg\n/uploads/upload_9120ff30_fa73_11e5_b942_b366214b09de_ff4e9a16b9.jpeg\n/uploads/zagruzhennoe_2_946c91c6d8.jpeg\n/uploads/maxresdefault_2_4747cae75c.jpeg\n/uploads/den_unge_zlatan_aca9a6118e.jpeg\n/uploads/zagruzhennoe_3_6dab3dce0f.jpeg\n/uploads/zagruzhennoe_4_63633dbd00.jpeg\n/uploads/81c_6f_Ledf_L_RI_13c54761cc.jpeg\n/uploads/zagruzhennoe_8e5b14a44a.jpeg\n/uploads/zagruzhennoe_1_1aee5f7ecf.jpeg\n/uploads/mqdefault_14f34c8254.jpeg\n/uploads/zagruzhennoe_2_d22375c7cf.jpeg\n/uploads/zagruzhennoe_3_c78d64a9f0.jpeg\n/uploads/zagruzhennoe_4_43cd3f60e9.jpeg\n/uploads/big_davidandthespidersper011_2cef9d8735.jpeg\n/uploads/maxresdefault_c1369083db.jpeg\n/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg\n/uploads/d17ab991_15c3_47ca_b1fb_a26f934df98a_1_f2bebed5f8.jpeg\n/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg\n/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg\n/uploads/280x178_2_6598614535.jpeg\n/uploads/8bf194589919a057d7e55e6e0bc38735_0978fd8db5.jpeg\n/uploads/3a98ad3e71cfbedb0b2466370045316b_1_784d43f041.jpeg\n/uploads/Laurie_Anderson_Heart_of_a_Dog_3_c372653d1e.jpeg\n/uploads/maxresdefault_205d90151c.jpeg\n/uploads/zagruzhennoe_c6067b77eb.jpeg\n/uploads/Screen_Shot_2017_01_04_at_17_16_53_252ea5e2ed.png\n/uploads/maxresdefault_1_612cb16fc7.jpeg\n/uploads/maxresdefault_2_93b16a93b2.jpeg\n/uploads/zagruzhennoe_1_a1e063a238.jpeg\n/uploads/e36bad4f2265_ba51cc6359.jpeg\n/uploads/cairo_city_16051300_02_03_06_Still003_cabb6565ed.jpeg\n/uploads/maxresdefault_3_6405ad0751.jpeg\n/uploads/maxresdefault_4_ec1bd9b10e.jpeg\n/uploads/088af76dd77ab1a163a5383e7e7e7d54_99e2e11589.jpeg\n/uploads/a53ab962_077a_4070_ac84_c17147e8fb16_1_4e37b08263.jpeg\n/uploads/unnamed_359b8cf568.jpeg\n/uploads/FBD_5_B97_D_D7_D5_47_CE_8_BB_6_2_EB_7_F984930_B_cx0_cy4_cw0_w1080_h608_4389f95b4f.jpeg\n/uploads/280x178_2_c754a5b367.jpeg\n/uploads/upload_TASS_1208585_pic905_895x505_34010_8e95098253.jpeg\n/uploads/man_f_3d0de1e8ca.jpeg\n/uploads/zagruzhennoe_efde9fa49e.jpeg\n/uploads/p520_1230881_81aa5bbd41.jpeg\n/uploads/f7946f5351da49b8141e7a11123070cc_0bb6969ffa.jpeg\n/uploads/24fcf0b4ded34dbc8a6792d7fd39_44a7662e50.jpeg\n/uploads/43cfd54bcf44422999d5197f24db_b750bba458.jpeg\n/uploads/440796_ffb2d02a21.jpeg\n/uploads/zagruzhennoe_06c31828c6.jpeg\n/uploads/1062889_600_29c813e7bb.jpeg\n/uploads/f63d8e42d0fa44f184c69576f77a_19a34fb789.jpeg\n/uploads/600x380_29e69f9cf7.jpeg\n/uploads/sddefault_e815c40fed.jpeg\n/uploads/kinopoisk_ru_Stockholm_2_C_My_Love_3458597_125b341b3c.jpeg\n/uploads/maxresdefault_04027c182c.jpeg\n/uploads/0001_76c25905da.jpeg\n/uploads/challenge_6_2000x869_51ced1214b.jpeg\n/uploads/rem_koolhaas_in_venice_2014_image_tomas_koolhaas_c88566c140.jpeg\n/uploads/zagruzhennoe_1_2e377c1bed.jpeg\n/uploads/tetragrammaton_3032831_7345d2be9b.jpeg\n/uploads/mamleev_1_1200x630_80075a241e.jpeg\n/uploads/95182_c923d140df.png\n/uploads/280x178_2_f53364a363.jpeg\n/uploads/2_43_1009401e3b.jpeg\n/uploads/twothree_1_2000x869_b84e29b069.jpeg\n/uploads/a3365cbf4d37ce2be6377cb29240e015_e54f928a4a.jpeg\n/uploads/Trailer_Thumbnail_v2_f93b84bae3.jpeg\n/uploads/1005x558_20180611112745a84cdb6853_207389185c.jpeg\n/uploads/zagruzhennoe_0452298b2b.jpeg\n/uploads/zagruzhennoe_1_abf766fea9.jpeg\n/uploads/C1_Vu_Acsdz_MY_727ba0c04a.jpeg\n/uploads/zagruzhennoe_2_9d38eea933.jpeg\n/uploads/2_AQ_sbvju_Rqpu_UP_9m_BQ_y_IXF_usg1_Q_vjae_Avq_Eovvs_I1_M_81fb0dc307.jpeg\n/uploads/word1_f7db41ec2c.jpeg\n/uploads/d3662037577f2479bbe5d96f2ae17b77e85933c22e50f4be481bbd69d90e1a5f_fdc1f29e58.jpeg\n/uploads/zagruzhennoe_3_a42111e53f.jpeg\n/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg\n/uploads/0_b389b72805.jpeg\n/uploads/content_Mountain_Movie_201caecdbf.jpeg\n/uploads/unnamed_e16c34a51a.jpeg\n/uploads/drib_1_1200x630_61aeb78757.jpeg\n/uploads/280x178_2_622e3d04db.jpeg\n/uploads/zagruzhennoe_4_729e7917e3.jpeg\n/uploads/FDC_3i7d_Ce_Zc2_Mk_RGLKP_f_KURIFG_gyc_X5_P3g4_B0wx8c_E_52a0fa86d7.jpeg\n/uploads/zagruzhennoe_5_259295f4a9.jpeg",
        "provider": "local",
        "provider_metadata": null,
        "created_at": "2020-12-02T16:47:22.972Z",
        "updated_at": "2020-12-02T16:47:22.972Z"
    }
},
{
    "id": 5,
    "nameRU": "Taqwacore: The Birth of Punk Islam",
    "nameEN": "Taqwacore: The Birth of Punk Islam",
    "director": " Омар Маджид",
    "country": "Канада",
    "year": "2009",
    "duration": 80,
    "description": "**Don't panic, we're Islamic!**\nПакистанские лесбиянки из Ванкувера, арабские хеви-металлисты из Чикаго, группа Vote Hezbollah, ведомая иранцем из Сан-Антонио, — все это невымышленные, сплошь настоящие персонажи, запечатленные в первом документальном свидетельстве о субкультуре исламского панка. Хотя до недавнего времени исламский панк, он же taqwacore, был художественным вымыслом, вышедшим из-под пера писателя-мусульманина Майкла Мухаммеда Найта, его книга сделала это явление вполне реальным, тогда как сам он стал главным героем фильма.\n",
    "trailerLink": "https://www.youtube.com/watch?v=JMZ8DO9F4Mo",
    "created_at": "2020-12-02T20:35:14.745Z",
    "updated_at": "2020-12-02T20:35:14.745Z",
    "image": {
        "id": 5,
        "name": "taqwacore2",
        "alternativeText": "",
        "caption": "",
        "width": 730,
        "height": 411,
        "formats": {
            "thumbnail": {
                "hash": "thumbnail_taqwacore2_2f487d2e74",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 245,
                "height": 138,
                "size": 7.01,
                "path": null,
                "url": "/uploads/thumbnail_taqwacore2_2f487d2e74.jpeg"
            },
            "small": {
                "hash": "small_taqwacore2_2f487d2e74",
                "ext": ".jpeg",
                "mime": "image/jpeg",
                "width": 500,
                "height": 282,
                "size": 16.29,
                "path": null,
                "url": "/uploads/small_taqwacore2_2f487d2e74.jpeg"
            }
        },
        "hash": "taqwacore2_2f487d2e74",
        "ext": ".jpeg",
        "mime": "image/jpeg",
        "size": 24.89,
        "url": "/uploads/taqwacore2_2f487d2e74.jpeg",
        "previewUrl": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg\n/uploads/all_tommoros_parties_33a125248d.jpeg\n/uploads/blur_a43fcf463d.jpeg\n/uploads/zagruzhennoe_113f557116.jpeg\n/uploads/taqwacore2_2f487d2e74.jpeg\n/uploads/881707734_640_d6a3a43358.jpeg\n/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg\n/uploads/images_5bfcbf36e6.jpeg\n/uploads/zagruzhennoe_1_fd5faff237.jpeg\n/uploads/images_244e1fd56f.jpeg\n/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg\n/uploads/590x400_2eccd40a93.jpeg\n/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg\n/uploads/1_6a9e0669ca.jpeg\n/uploads/zagruzhennoe_cba9c9f900.jpeg\n/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg\n/uploads/280x178_2_f2eee77cae.jpeg\n/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg\n/uploads/Backyard_327_3_2151980c5c.jpeg\n/uploads/zagruzhennoe_2_5f87844408.jpeg\n/uploads/maxresdefault_505b3fa578.jpeg\n/uploads/b1_3385dd88fe.jpeg\n/uploads/9c3adee646635c6aa56a229dbe9b9779_original_8b382dc3ec.jpeg\n/uploads/740x457_2016090618140134690b5589_07f872345d.jpeg\n/uploads/667708311_1280x720_558f3de42b.jpeg\n/uploads/inni_13_fb13830e94.jpeg\n/uploads/AAACDZTO_o_OJ_yo_Sf_EXLJ_5_J1u_J_r7j_FNH_vrcn_OAU_a_UX_s_Ljl6t_DBSZ_7_YPUDVPA_i_Cs1_Cje_y_Hb9_M8zvf6_DX_n_Qtux_Qa_SD_r_I_ea7df93d26.jpeg\n/uploads/amma_lo_fi_739aeb0890.jpeg\n/uploads/750x485_28d08c49c4.jpeg\n/uploads/zagruzhennoe_53d33dc9df.jpeg\n/uploads/TEENAGE_3_600_3b1cce5358.jpeg\n/uploads/unnamed_aa708a91a1.jpeg\n/uploads/133633090dfcb40e8e87ecf6cb52c419_c534c1283c.jpeg\n/uploads/zagruzhennoe_1_38e987f181.jpeg\n/uploads/Shut_Up_Hits_poster_f5bb0d6e83.jpeg\n/uploads/Art_Cinema_Webslug_Mr_Baker_de10be970f.jpeg\n/uploads/embed_still_available_now_8e4038f1f6.jpeg\n/uploads/704543546_960_d6340bce70.jpeg\n/uploads/Oil_City_Confidential_676986530_large_652c54fa63.jpeg\n/uploads/5a8db56aa48049529df13a2d2ab0_be34c45c62.jpeg\n/uploads/zagruzhennoe_58e5329700.jpeg\n/uploads/zagruzhennoe_1_9994d6db60.jpeg\n/uploads/BM_uc_YK_d_P4jn9lp_QF_7_Ew8z8_micr_f849e20df3.jpeg\n/uploads/ORCHARD_888003020894_Full_Image_Gallery_Cover_en_US_1551076193509_UY_500_UX_667_RI_VX_n_Xh_LAZXKUVW_a_NQPF_j2_CR_q_Ehjv_ERHT_od_TTW_0a20f1d30d.jpeg\n/uploads/zagruzhennoe_2_17bcd9ceff.jpeg\n/uploads/zagruzhennoe_3_312a12853b.jpeg\n/uploads/750x485_a07b1b2585.jpeg\n/uploads/14e1f2912a2a169b11820e3163df6c69_a01189ce50.jpeg\n/uploads/unnamed_0256d7127c.jpeg\n/uploads/zagruzhennoe_7326b1cb5f.jpeg\n/uploads/15786_oldschool_renegades_docu_c54f63dfc1.jpeg\n/uploads/552242179_1280x720_66bc43b289.jpeg\n/uploads/Super_Duper_Alice_Cooper_2014_8b1641fbaf.jpeg\n/uploads/orig_bc3e53efa8.jpeg\n/uploads/zagruzhennoe_1_1817cd23a2.jpeg\n/uploads/zagruzhennoe_2_c709860078.jpeg\n/uploads/zagruzhennoe_3_08092046af.jpeg\n/uploads/images_0bbc035397.jpeg\n/uploads/77e84d33e7f526823bd23362c6e66261_a9c0fb3836.jpeg\n/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png\n/uploads/Snimok_ekrana_2020_12_03_v_16_00_28_a851176a2d.png\n/uploads/Werewolves_Across_America_3f48106062.jpeg\n/uploads/zagruzhennoe_edcf93eb96.jpeg\n/uploads/maxresdefault_88702f9bc0.jpeg\n/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg\n/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg\n/uploads/zagruzhennoe_1_3b8b337f95.jpeg\n/uploads/unnamed_0bd470956a.jpeg\n/uploads/705753536_1280x720_3f3ec9830f.jpeg\n/uploads/wyr_139_03_7a244dbd6e.jpeg\n/uploads/zagruzhennoe_b22b6e2887.jpeg\n/uploads/images_d789f0a61a.jpeg\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_913b905856.png\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_707fba4597.png\n/uploads/maxresdefault_21f787cdf3.jpeg\n/uploads/maxresdefault_1_0cda104e49.jpeg\n/uploads/maxresdefault_2_3072271808.jpeg\n/uploads/images_f324307a7f.jpeg\n/uploads/unnamed_4f99c0fa1e.jpeg\n/uploads/zagruzhennoe_a32e347316.jpeg\n/uploads/maxresdefault_164e1c974c.jpeg\n/uploads/b80915f7_d774_4536_9e79_450578a40ad4_9131a274_04cd1fb520.jpeg\n/uploads/12032_770x433_74026cdeb6.jpeg\n/uploads/zagruzhennoe_1_70b0c1a682.jpeg\n/uploads/maxresdefault_1_5bef2a2c64.jpeg\n/uploads/750x485_6aa18b04bb.jpeg\n/uploads/3_29_4b376917c9.jpeg\n/uploads/upload_9120ff30_fa73_11e5_b942_b366214b09de_ff4e9a16b9.jpeg\n/uploads/zagruzhennoe_2_946c91c6d8.jpeg\n/uploads/maxresdefault_2_4747cae75c.jpeg\n/uploads/den_unge_zlatan_aca9a6118e.jpeg\n/uploads/zagruzhennoe_3_6dab3dce0f.jpeg\n/uploads/zagruzhennoe_4_63633dbd00.jpeg\n/uploads/81c_6f_Ledf_L_RI_13c54761cc.jpeg\n/uploads/zagruzhennoe_8e5b14a44a.jpeg\n/uploads/zagruzhennoe_1_1aee5f7ecf.jpeg\n/uploads/mqdefault_14f34c8254.jpeg\n/uploads/zagruzhennoe_2_d22375c7cf.jpeg\n/uploads/zagruzhennoe_3_c78d64a9f0.jpeg\n/uploads/zagruzhennoe_4_43cd3f60e9.jpeg\n/uploads/big_davidandthespidersper011_2cef9d8735.jpeg\n/uploads/maxresdefault_c1369083db.jpeg\n/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg\n/uploads/d17ab991_15c3_47ca_b1fb_a26f934df98a_1_f2bebed5f8.jpeg\n/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg\n/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg\n/uploads/280x178_2_6598614535.jpeg\n/uploads/8bf194589919a057d7e55e6e0bc38735_0978fd8db5.jpeg\n/uploads/3a98ad3e71cfbedb0b2466370045316b_1_784d43f041.jpeg\n/uploads/Laurie_Anderson_Heart_of_a_Dog_3_c372653d1e.jpeg\n/uploads/maxresdefault_205d90151c.jpeg\n/uploads/zagruzhennoe_c6067b77eb.jpeg\n/uploads/Screen_Shot_2017_01_04_at_17_16_53_252ea5e2ed.png\n/uploads/maxresdefault_1_612cb16fc7.jpeg\n/uploads/maxresdefault_2_93b16a93b2.jpeg\n/uploads/zagruzhennoe_1_a1e063a238.jpeg\n/uploads/e36bad4f2265_ba51cc6359.jpeg\n/uploads/cairo_city_16051300_02_03_06_Still003_cabb6565ed.jpeg\n/uploads/maxresdefault_3_6405ad0751.jpeg\n/uploads/maxresdefault_4_ec1bd9b10e.jpeg\n/uploads/088af76dd77ab1a163a5383e7e7e7d54_99e2e11589.jpeg\n/uploads/a53ab962_077a_4070_ac84_c17147e8fb16_1_4e37b08263.jpeg\n/uploads/unnamed_359b8cf568.jpeg\n/uploads/FBD_5_B97_D_D7_D5_47_CE_8_BB_6_2_EB_7_F984930_B_cx0_cy4_cw0_w1080_h608_4389f95b4f.jpeg\n/uploads/280x178_2_c754a5b367.jpeg\n/uploads/upload_TASS_1208585_pic905_895x505_34010_8e95098253.jpeg\n/uploads/man_f_3d0de1e8ca.jpeg\n/uploads/zagruzhennoe_efde9fa49e.jpeg\n/uploads/p520_1230881_81aa5bbd41.jpeg\n/uploads/f7946f5351da49b8141e7a11123070cc_0bb6969ffa.jpeg\n/uploads/24fcf0b4ded34dbc8a6792d7fd39_44a7662e50.jpeg\n/uploads/43cfd54bcf44422999d5197f24db_b750bba458.jpeg\n/uploads/440796_ffb2d02a21.jpeg\n/uploads/zagruzhennoe_06c31828c6.jpeg\n/uploads/1062889_600_29c813e7bb.jpeg\n/uploads/f63d8e42d0fa44f184c69576f77a_19a34fb789.jpeg\n/uploads/600x380_29e69f9cf7.jpeg\n/uploads/sddefault_e815c40fed.jpeg\n/uploads/kinopoisk_ru_Stockholm_2_C_My_Love_3458597_125b341b3c.jpeg\n/uploads/maxresdefault_04027c182c.jpeg\n/uploads/0001_76c25905da.jpeg\n/uploads/challenge_6_2000x869_51ced1214b.jpeg\n/uploads/rem_koolhaas_in_venice_2014_image_tomas_koolhaas_c88566c140.jpeg\n/uploads/zagruzhennoe_1_2e377c1bed.jpeg\n/uploads/tetragrammaton_3032831_7345d2be9b.jpeg\n/uploads/mamleev_1_1200x630_80075a241e.jpeg\n/uploads/95182_c923d140df.png\n/uploads/280x178_2_f53364a363.jpeg\n/uploads/2_43_1009401e3b.jpeg\n/uploads/twothree_1_2000x869_b84e29b069.jpeg\n/uploads/a3365cbf4d37ce2be6377cb29240e015_e54f928a4a.jpeg\n/uploads/Trailer_Thumbnail_v2_f93b84bae3.jpeg\n/uploads/1005x558_20180611112745a84cdb6853_207389185c.jpeg\n/uploads/zagruzhennoe_0452298b2b.jpeg\n/uploads/zagruzhennoe_1_abf766fea9.jpeg\n/uploads/C1_Vu_Acsdz_MY_727ba0c04a.jpeg\n/uploads/zagruzhennoe_2_9d38eea933.jpeg\n/uploads/2_AQ_sbvju_Rqpu_UP_9m_BQ_y_IXF_usg1_Q_vjae_Avq_Eovvs_I1_M_81fb0dc307.jpeg\n/uploads/word1_f7db41ec2c.jpeg\n/uploads/d3662037577f2479bbe5d96f2ae17b77e85933c22e50f4be481bbd69d90e1a5f_fdc1f29e58.jpeg\n/uploads/zagruzhennoe_3_a42111e53f.jpeg\n/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg\n/uploads/0_b389b72805.jpeg\n/uploads/content_Mountain_Movie_201caecdbf.jpeg\n/uploads/unnamed_e16c34a51a.jpeg\n/uploads/drib_1_1200x630_61aeb78757.jpeg\n/uploads/280x178_2_622e3d04db.jpeg\n/uploads/zagruzhennoe_4_729e7917e3.jpeg\n/uploads/FDC_3i7d_Ce_Zc2_Mk_RGLKP_f_KURIFG_gyc_X5_P3g4_B0wx8c_E_52a0fa86d7.jpeg\n/uploads/zagruzhennoe_5_259295f4a9.jpeg",
        "provider": "local",
        "provider_metadata": null,
        "created_at": "2020-12-02T20:34:50.858Z",
        "updated_at": "2020-12-02T20:34:50.858Z"
    }
},
{
  "id": 6,
  "nameRU": "Фавела на взрыве",
  "nameEN": "Favela on Blast",
  "director": "Уэсли Пенц",
  "country": "Бразилия",
  "year": "2008",
  "duration": 80,
  "description": "**Визионер из трущоб**\nГимн бразильским гетто (они же фавелы), породившим байле-фанк — взбалмошную смесь музыки стран третьего мира, нелегального рейва и злого фанка, на волне которого вышли в люди Майя и Сантиголд. Снял фильм не кто иной, как Дипло (он же Уэсли Пенц) — диджей, продюсер и крестный отец двух вышеупомянутых артисток. Поэтому неудивительно, что вместо истории жанра в сухом остатке у него вышла увлекательная этнографическая экспедиция в трущобы Рио-де-Жанейро, где наркотики, секс и зашкаливающий уровень преступности играют в становлении байле-фанка не меньшую роль, чем сама музыка.\n",
  "trailerLink": "https://www.youtube.com/watch?v=Cugdwa7mndA",
  "created_at": "2020-12-02T20:37:33.665Z",
  "updated_at": "2020-12-02T20:37:33.665Z",
  "image": {
      "id": 6,
      "name": "881707734_640",
      "alternativeText": "",
      "caption": "",
      "width": 640,
      "height": 360,
      "formats": {
          "thumbnail": {
              "hash": "thumbnail_881707734_640_d6a3a43358",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 245,
              "height": 138,
              "size": 6.09,
              "path": null,
              "url": "/uploads/thumbnail_881707734_640_d6a3a43358.jpeg"
          },
          "small": {
              "hash": "small_881707734_640_d6a3a43358",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 500,
              "height": 281,
              "size": 17.26,
              "path": null,
              "url": "/uploads/small_881707734_640_d6a3a43358.jpeg"
          }
      },
      "hash": "881707734_640_d6a3a43358",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 23.67,
      "url": "/uploads/881707734_640_d6a3a43358.jpeg",
      "previewUrl": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg\n/uploads/all_tommoros_parties_33a125248d.jpeg\n/uploads/blur_a43fcf463d.jpeg\n/uploads/zagruzhennoe_113f557116.jpeg\n/uploads/taqwacore2_2f487d2e74.jpeg\n/uploads/881707734_640_d6a3a43358.jpeg\n/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg\n/uploads/images_5bfcbf36e6.jpeg\n/uploads/zagruzhennoe_1_fd5faff237.jpeg\n/uploads/images_244e1fd56f.jpeg\n/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg\n/uploads/590x400_2eccd40a93.jpeg\n/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg\n/uploads/1_6a9e0669ca.jpeg\n/uploads/zagruzhennoe_cba9c9f900.jpeg\n/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg\n/uploads/280x178_2_f2eee77cae.jpeg\n/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg\n/uploads/Backyard_327_3_2151980c5c.jpeg\n/uploads/zagruzhennoe_2_5f87844408.jpeg\n/uploads/maxresdefault_505b3fa578.jpeg\n/uploads/b1_3385dd88fe.jpeg\n/uploads/9c3adee646635c6aa56a229dbe9b9779_original_8b382dc3ec.jpeg\n/uploads/740x457_2016090618140134690b5589_07f872345d.jpeg\n/uploads/667708311_1280x720_558f3de42b.jpeg\n/uploads/inni_13_fb13830e94.jpeg\n/uploads/AAACDZTO_o_OJ_yo_Sf_EXLJ_5_J1u_J_r7j_FNH_vrcn_OAU_a_UX_s_Ljl6t_DBSZ_7_YPUDVPA_i_Cs1_Cje_y_Hb9_M8zvf6_DX_n_Qtux_Qa_SD_r_I_ea7df93d26.jpeg\n/uploads/amma_lo_fi_739aeb0890.jpeg\n/uploads/750x485_28d08c49c4.jpeg\n/uploads/zagruzhennoe_53d33dc9df.jpeg\n/uploads/TEENAGE_3_600_3b1cce5358.jpeg\n/uploads/unnamed_aa708a91a1.jpeg\n/uploads/133633090dfcb40e8e87ecf6cb52c419_c534c1283c.jpeg\n/uploads/zagruzhennoe_1_38e987f181.jpeg\n/uploads/Shut_Up_Hits_poster_f5bb0d6e83.jpeg\n/uploads/Art_Cinema_Webslug_Mr_Baker_de10be970f.jpeg\n/uploads/embed_still_available_now_8e4038f1f6.jpeg\n/uploads/704543546_960_d6340bce70.jpeg\n/uploads/Oil_City_Confidential_676986530_large_652c54fa63.jpeg\n/uploads/5a8db56aa48049529df13a2d2ab0_be34c45c62.jpeg\n/uploads/zagruzhennoe_58e5329700.jpeg\n/uploads/zagruzhennoe_1_9994d6db60.jpeg\n/uploads/BM_uc_YK_d_P4jn9lp_QF_7_Ew8z8_micr_f849e20df3.jpeg\n/uploads/ORCHARD_888003020894_Full_Image_Gallery_Cover_en_US_1551076193509_UY_500_UX_667_RI_VX_n_Xh_LAZXKUVW_a_NQPF_j2_CR_q_Ehjv_ERHT_od_TTW_0a20f1d30d.jpeg\n/uploads/zagruzhennoe_2_17bcd9ceff.jpeg\n/uploads/zagruzhennoe_3_312a12853b.jpeg\n/uploads/750x485_a07b1b2585.jpeg\n/uploads/14e1f2912a2a169b11820e3163df6c69_a01189ce50.jpeg\n/uploads/unnamed_0256d7127c.jpeg\n/uploads/zagruzhennoe_7326b1cb5f.jpeg\n/uploads/15786_oldschool_renegades_docu_c54f63dfc1.jpeg\n/uploads/552242179_1280x720_66bc43b289.jpeg\n/uploads/Super_Duper_Alice_Cooper_2014_8b1641fbaf.jpeg\n/uploads/orig_bc3e53efa8.jpeg\n/uploads/zagruzhennoe_1_1817cd23a2.jpeg\n/uploads/zagruzhennoe_2_c709860078.jpeg\n/uploads/zagruzhennoe_3_08092046af.jpeg\n/uploads/images_0bbc035397.jpeg\n/uploads/77e84d33e7f526823bd23362c6e66261_a9c0fb3836.jpeg\n/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png\n/uploads/Snimok_ekrana_2020_12_03_v_16_00_28_a851176a2d.png\n/uploads/Werewolves_Across_America_3f48106062.jpeg\n/uploads/zagruzhennoe_edcf93eb96.jpeg\n/uploads/maxresdefault_88702f9bc0.jpeg\n/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg\n/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg\n/uploads/zagruzhennoe_1_3b8b337f95.jpeg\n/uploads/unnamed_0bd470956a.jpeg\n/uploads/705753536_1280x720_3f3ec9830f.jpeg\n/uploads/wyr_139_03_7a244dbd6e.jpeg\n/uploads/zagruzhennoe_b22b6e2887.jpeg\n/uploads/images_d789f0a61a.jpeg\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_913b905856.png\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_707fba4597.png\n/uploads/maxresdefault_21f787cdf3.jpeg\n/uploads/maxresdefault_1_0cda104e49.jpeg\n/uploads/maxresdefault_2_3072271808.jpeg\n/uploads/images_f324307a7f.jpeg\n/uploads/unnamed_4f99c0fa1e.jpeg\n/uploads/zagruzhennoe_a32e347316.jpeg\n/uploads/maxresdefault_164e1c974c.jpeg\n/uploads/b80915f7_d774_4536_9e79_450578a40ad4_9131a274_04cd1fb520.jpeg\n/uploads/12032_770x433_74026cdeb6.jpeg\n/uploads/zagruzhennoe_1_70b0c1a682.jpeg\n/uploads/maxresdefault_1_5bef2a2c64.jpeg\n/uploads/750x485_6aa18b04bb.jpeg\n/uploads/3_29_4b376917c9.jpeg\n/uploads/upload_9120ff30_fa73_11e5_b942_b366214b09de_ff4e9a16b9.jpeg\n/uploads/zagruzhennoe_2_946c91c6d8.jpeg\n/uploads/maxresdefault_2_4747cae75c.jpeg\n/uploads/den_unge_zlatan_aca9a6118e.jpeg\n/uploads/zagruzhennoe_3_6dab3dce0f.jpeg\n/uploads/zagruzhennoe_4_63633dbd00.jpeg\n/uploads/81c_6f_Ledf_L_RI_13c54761cc.jpeg\n/uploads/zagruzhennoe_8e5b14a44a.jpeg\n/uploads/zagruzhennoe_1_1aee5f7ecf.jpeg\n/uploads/mqdefault_14f34c8254.jpeg\n/uploads/zagruzhennoe_2_d22375c7cf.jpeg\n/uploads/zagruzhennoe_3_c78d64a9f0.jpeg\n/uploads/zagruzhennoe_4_43cd3f60e9.jpeg\n/uploads/big_davidandthespidersper011_2cef9d8735.jpeg\n/uploads/maxresdefault_c1369083db.jpeg\n/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg\n/uploads/d17ab991_15c3_47ca_b1fb_a26f934df98a_1_f2bebed5f8.jpeg\n/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg\n/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg\n/uploads/280x178_2_6598614535.jpeg\n/uploads/8bf194589919a057d7e55e6e0bc38735_0978fd8db5.jpeg\n/uploads/3a98ad3e71cfbedb0b2466370045316b_1_784d43f041.jpeg\n/uploads/Laurie_Anderson_Heart_of_a_Dog_3_c372653d1e.jpeg\n/uploads/maxresdefault_205d90151c.jpeg\n/uploads/zagruzhennoe_c6067b77eb.jpeg\n/uploads/Screen_Shot_2017_01_04_at_17_16_53_252ea5e2ed.png\n/uploads/maxresdefault_1_612cb16fc7.jpeg\n/uploads/maxresdefault_2_93b16a93b2.jpeg\n/uploads/zagruzhennoe_1_a1e063a238.jpeg\n/uploads/e36bad4f2265_ba51cc6359.jpeg\n/uploads/cairo_city_16051300_02_03_06_Still003_cabb6565ed.jpeg\n/uploads/maxresdefault_3_6405ad0751.jpeg\n/uploads/maxresdefault_4_ec1bd9b10e.jpeg\n/uploads/088af76dd77ab1a163a5383e7e7e7d54_99e2e11589.jpeg\n/uploads/a53ab962_077a_4070_ac84_c17147e8fb16_1_4e37b08263.jpeg\n/uploads/unnamed_359b8cf568.jpeg\n/uploads/FBD_5_B97_D_D7_D5_47_CE_8_BB_6_2_EB_7_F984930_B_cx0_cy4_cw0_w1080_h608_4389f95b4f.jpeg\n/uploads/280x178_2_c754a5b367.jpeg\n/uploads/upload_TASS_1208585_pic905_895x505_34010_8e95098253.jpeg\n/uploads/man_f_3d0de1e8ca.jpeg\n/uploads/zagruzhennoe_efde9fa49e.jpeg\n/uploads/p520_1230881_81aa5bbd41.jpeg\n/uploads/f7946f5351da49b8141e7a11123070cc_0bb6969ffa.jpeg\n/uploads/24fcf0b4ded34dbc8a6792d7fd39_44a7662e50.jpeg\n/uploads/43cfd54bcf44422999d5197f24db_b750bba458.jpeg\n/uploads/440796_ffb2d02a21.jpeg\n/uploads/zagruzhennoe_06c31828c6.jpeg\n/uploads/1062889_600_29c813e7bb.jpeg\n/uploads/f63d8e42d0fa44f184c69576f77a_19a34fb789.jpeg\n/uploads/600x380_29e69f9cf7.jpeg\n/uploads/sddefault_e815c40fed.jpeg\n/uploads/kinopoisk_ru_Stockholm_2_C_My_Love_3458597_125b341b3c.jpeg\n/uploads/maxresdefault_04027c182c.jpeg\n/uploads/0001_76c25905da.jpeg\n/uploads/challenge_6_2000x869_51ced1214b.jpeg\n/uploads/rem_koolhaas_in_venice_2014_image_tomas_koolhaas_c88566c140.jpeg\n/uploads/zagruzhennoe_1_2e377c1bed.jpeg\n/uploads/tetragrammaton_3032831_7345d2be9b.jpeg\n/uploads/mamleev_1_1200x630_80075a241e.jpeg\n/uploads/95182_c923d140df.png\n/uploads/280x178_2_f53364a363.jpeg\n/uploads/2_43_1009401e3b.jpeg\n/uploads/twothree_1_2000x869_b84e29b069.jpeg\n/uploads/a3365cbf4d37ce2be6377cb29240e015_e54f928a4a.jpeg\n/uploads/Trailer_Thumbnail_v2_f93b84bae3.jpeg\n/uploads/1005x558_20180611112745a84cdb6853_207389185c.jpeg\n/uploads/zagruzhennoe_0452298b2b.jpeg\n/uploads/zagruzhennoe_1_abf766fea9.jpeg\n/uploads/C1_Vu_Acsdz_MY_727ba0c04a.jpeg\n/uploads/zagruzhennoe_2_9d38eea933.jpeg\n/uploads/2_AQ_sbvju_Rqpu_UP_9m_BQ_y_IXF_usg1_Q_vjae_Avq_Eovvs_I1_M_81fb0dc307.jpeg\n/uploads/word1_f7db41ec2c.jpeg\n/uploads/d3662037577f2479bbe5d96f2ae17b77e85933c22e50f4be481bbd69d90e1a5f_fdc1f29e58.jpeg\n/uploads/zagruzhennoe_3_a42111e53f.jpeg\n/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg\n/uploads/0_b389b72805.jpeg\n/uploads/content_Mountain_Movie_201caecdbf.jpeg\n/uploads/unnamed_e16c34a51a.jpeg\n/uploads/drib_1_1200x630_61aeb78757.jpeg\n/uploads/280x178_2_622e3d04db.jpeg\n/uploads/zagruzhennoe_4_729e7917e3.jpeg\n/uploads/FDC_3i7d_Ce_Zc2_Mk_RGLKP_f_KURIFG_gyc_X5_P3g4_B0wx8c_E_52a0fa86d7.jpeg\n/uploads/zagruzhennoe_5_259295f4a9.jpeg",
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T20:37:23.499Z",
      "updated_at": "2020-12-02T20:37:23.499Z"
  }
},
{
  "id": 7,
  "nameRU": "Постеры, сошедшие со стен",
  "nameEN": "The Posters Came from the Walls",
  "director": "Джереми Деллер, Николас Абрахамс",
  "country": "Великобритания",
  "year": "2008",
  "duration": 72,
  "description": "**Depeche Mode как смысл жизни**\nКругосветная панорама, показывающая обычаи и традиции поклонников Depeche Mode по всему миру: от России до Ирана. Отправившись снимать парадную картину, рассказывающую о том, как любят группу Depeche Mode за пределами Британии, авторы фильма столкнулись с тем, что любовь эта подчас носит очень личный — и в то же время общенациональный — характер.\n",
  "trailerLink": "https://www.youtube.com/watch?v=VFMU3crg0sM",
  "created_at": "2020-12-02T20:40:08.342Z",
  "updated_at": "2020-12-02T20:40:08.342Z",
  "image": {
      "id": 7,
      "name": "posters-came-from-the-walls-2009-001-posters",
      "alternativeText": "",
      "caption": "",
      "width": 1000,
      "height": 750,
      "formats": {
          "thumbnail": {
              "hash": "thumbnail_posters_came_from_the_walls_2009_001_posters_180fe1a19f",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 208,
              "height": 156,
              "size": 10.53,
              "path": null,
              "url": "/uploads/thumbnail_posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg"
          },
          "medium": {
              "hash": "medium_posters_came_from_the_walls_2009_001_posters_180fe1a19f",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 750,
              "height": 563,
              "size": 92.16,
              "path": null,
              "url": "/uploads/medium_posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg"
          },
          "small": {
              "hash": "small_posters_came_from_the_walls_2009_001_posters_180fe1a19f",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 500,
              "height": 375,
              "size": 46.34,
              "path": null,
              "url": "/uploads/small_posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg"
          }
      },
      "hash": "posters_came_from_the_walls_2009_001_posters_180fe1a19f",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 153.63,
      "url": "/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg",
      "previewUrl": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg\n/uploads/all_tommoros_parties_33a125248d.jpeg\n/uploads/blur_a43fcf463d.jpeg\n/uploads/zagruzhennoe_113f557116.jpeg\n/uploads/taqwacore2_2f487d2e74.jpeg\n/uploads/881707734_640_d6a3a43358.jpeg\n/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg\n/uploads/images_5bfcbf36e6.jpeg\n/uploads/zagruzhennoe_1_fd5faff237.jpeg\n/uploads/images_244e1fd56f.jpeg\n/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg\n/uploads/590x400_2eccd40a93.jpeg\n/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg\n/uploads/1_6a9e0669ca.jpeg\n/uploads/zagruzhennoe_cba9c9f900.jpeg\n/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg\n/uploads/280x178_2_f2eee77cae.jpeg\n/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg\n/uploads/Backyard_327_3_2151980c5c.jpeg\n/uploads/zagruzhennoe_2_5f87844408.jpeg\n/uploads/maxresdefault_505b3fa578.jpeg\n/uploads/b1_3385dd88fe.jpeg\n/uploads/9c3adee646635c6aa56a229dbe9b9779_original_8b382dc3ec.jpeg\n/uploads/740x457_2016090618140134690b5589_07f872345d.jpeg\n/uploads/667708311_1280x720_558f3de42b.jpeg\n/uploads/inni_13_fb13830e94.jpeg\n/uploads/AAACDZTO_o_OJ_yo_Sf_EXLJ_5_J1u_J_r7j_FNH_vrcn_OAU_a_UX_s_Ljl6t_DBSZ_7_YPUDVPA_i_Cs1_Cje_y_Hb9_M8zvf6_DX_n_Qtux_Qa_SD_r_I_ea7df93d26.jpeg\n/uploads/amma_lo_fi_739aeb0890.jpeg\n/uploads/750x485_28d08c49c4.jpeg\n/uploads/zagruzhennoe_53d33dc9df.jpeg\n/uploads/TEENAGE_3_600_3b1cce5358.jpeg\n/uploads/unnamed_aa708a91a1.jpeg\n/uploads/133633090dfcb40e8e87ecf6cb52c419_c534c1283c.jpeg\n/uploads/zagruzhennoe_1_38e987f181.jpeg\n/uploads/Shut_Up_Hits_poster_f5bb0d6e83.jpeg\n/uploads/Art_Cinema_Webslug_Mr_Baker_de10be970f.jpeg\n/uploads/embed_still_available_now_8e4038f1f6.jpeg\n/uploads/704543546_960_d6340bce70.jpeg\n/uploads/Oil_City_Confidential_676986530_large_652c54fa63.jpeg\n/uploads/5a8db56aa48049529df13a2d2ab0_be34c45c62.jpeg\n/uploads/zagruzhennoe_58e5329700.jpeg\n/uploads/zagruzhennoe_1_9994d6db60.jpeg\n/uploads/BM_uc_YK_d_P4jn9lp_QF_7_Ew8z8_micr_f849e20df3.jpeg\n/uploads/ORCHARD_888003020894_Full_Image_Gallery_Cover_en_US_1551076193509_UY_500_UX_667_RI_VX_n_Xh_LAZXKUVW_a_NQPF_j2_CR_q_Ehjv_ERHT_od_TTW_0a20f1d30d.jpeg\n/uploads/zagruzhennoe_2_17bcd9ceff.jpeg\n/uploads/zagruzhennoe_3_312a12853b.jpeg\n/uploads/750x485_a07b1b2585.jpeg\n/uploads/14e1f2912a2a169b11820e3163df6c69_a01189ce50.jpeg\n/uploads/unnamed_0256d7127c.jpeg\n/uploads/zagruzhennoe_7326b1cb5f.jpeg\n/uploads/15786_oldschool_renegades_docu_c54f63dfc1.jpeg\n/uploads/552242179_1280x720_66bc43b289.jpeg\n/uploads/Super_Duper_Alice_Cooper_2014_8b1641fbaf.jpeg\n/uploads/orig_bc3e53efa8.jpeg\n/uploads/zagruzhennoe_1_1817cd23a2.jpeg\n/uploads/zagruzhennoe_2_c709860078.jpeg\n/uploads/zagruzhennoe_3_08092046af.jpeg\n/uploads/images_0bbc035397.jpeg\n/uploads/77e84d33e7f526823bd23362c6e66261_a9c0fb3836.jpeg\n/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png\n/uploads/Snimok_ekrana_2020_12_03_v_16_00_28_a851176a2d.png\n/uploads/Werewolves_Across_America_3f48106062.jpeg\n/uploads/zagruzhennoe_edcf93eb96.jpeg\n/uploads/maxresdefault_88702f9bc0.jpeg\n/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg\n/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg\n/uploads/zagruzhennoe_1_3b8b337f95.jpeg\n/uploads/unnamed_0bd470956a.jpeg\n/uploads/705753536_1280x720_3f3ec9830f.jpeg\n/uploads/wyr_139_03_7a244dbd6e.jpeg\n/uploads/zagruzhennoe_b22b6e2887.jpeg\n/uploads/images_d789f0a61a.jpeg\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_913b905856.png\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_707fba4597.png\n/uploads/maxresdefault_21f787cdf3.jpeg\n/uploads/maxresdefault_1_0cda104e49.jpeg\n/uploads/maxresdefault_2_3072271808.jpeg\n/uploads/images_f324307a7f.jpeg\n/uploads/unnamed_4f99c0fa1e.jpeg\n/uploads/zagruzhennoe_a32e347316.jpeg\n/uploads/maxresdefault_164e1c974c.jpeg\n/uploads/b80915f7_d774_4536_9e79_450578a40ad4_9131a274_04cd1fb520.jpeg\n/uploads/12032_770x433_74026cdeb6.jpeg\n/uploads/zagruzhennoe_1_70b0c1a682.jpeg\n/uploads/maxresdefault_1_5bef2a2c64.jpeg\n/uploads/750x485_6aa18b04bb.jpeg\n/uploads/3_29_4b376917c9.jpeg\n/uploads/upload_9120ff30_fa73_11e5_b942_b366214b09de_ff4e9a16b9.jpeg\n/uploads/zagruzhennoe_2_946c91c6d8.jpeg\n/uploads/maxresdefault_2_4747cae75c.jpeg\n/uploads/den_unge_zlatan_aca9a6118e.jpeg\n/uploads/zagruzhennoe_3_6dab3dce0f.jpeg\n/uploads/zagruzhennoe_4_63633dbd00.jpeg\n/uploads/81c_6f_Ledf_L_RI_13c54761cc.jpeg\n/uploads/zagruzhennoe_8e5b14a44a.jpeg\n/uploads/zagruzhennoe_1_1aee5f7ecf.jpeg\n/uploads/mqdefault_14f34c8254.jpeg\n/uploads/zagruzhennoe_2_d22375c7cf.jpeg\n/uploads/zagruzhennoe_3_c78d64a9f0.jpeg\n/uploads/zagruzhennoe_4_43cd3f60e9.jpeg\n/uploads/big_davidandthespidersper011_2cef9d8735.jpeg\n/uploads/maxresdefault_c1369083db.jpeg\n/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg\n/uploads/d17ab991_15c3_47ca_b1fb_a26f934df98a_1_f2bebed5f8.jpeg\n/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg\n/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg\n/uploads/280x178_2_6598614535.jpeg\n/uploads/8bf194589919a057d7e55e6e0bc38735_0978fd8db5.jpeg\n/uploads/3a98ad3e71cfbedb0b2466370045316b_1_784d43f041.jpeg\n/uploads/Laurie_Anderson_Heart_of_a_Dog_3_c372653d1e.jpeg\n/uploads/maxresdefault_205d90151c.jpeg\n/uploads/zagruzhennoe_c6067b77eb.jpeg\n/uploads/Screen_Shot_2017_01_04_at_17_16_53_252ea5e2ed.png\n/uploads/maxresdefault_1_612cb16fc7.jpeg\n/uploads/maxresdefault_2_93b16a93b2.jpeg\n/uploads/zagruzhennoe_1_a1e063a238.jpeg\n/uploads/e36bad4f2265_ba51cc6359.jpeg\n/uploads/cairo_city_16051300_02_03_06_Still003_cabb6565ed.jpeg\n/uploads/maxresdefault_3_6405ad0751.jpeg\n/uploads/maxresdefault_4_ec1bd9b10e.jpeg\n/uploads/088af76dd77ab1a163a5383e7e7e7d54_99e2e11589.jpeg\n/uploads/a53ab962_077a_4070_ac84_c17147e8fb16_1_4e37b08263.jpeg\n/uploads/unnamed_359b8cf568.jpeg\n/uploads/FBD_5_B97_D_D7_D5_47_CE_8_BB_6_2_EB_7_F984930_B_cx0_cy4_cw0_w1080_h608_4389f95b4f.jpeg\n/uploads/280x178_2_c754a5b367.jpeg\n/uploads/upload_TASS_1208585_pic905_895x505_34010_8e95098253.jpeg\n/uploads/man_f_3d0de1e8ca.jpeg\n/uploads/zagruzhennoe_efde9fa49e.jpeg\n/uploads/p520_1230881_81aa5bbd41.jpeg\n/uploads/f7946f5351da49b8141e7a11123070cc_0bb6969ffa.jpeg\n/uploads/24fcf0b4ded34dbc8a6792d7fd39_44a7662e50.jpeg\n/uploads/43cfd54bcf44422999d5197f24db_b750bba458.jpeg\n/uploads/440796_ffb2d02a21.jpeg\n/uploads/zagruzhennoe_06c31828c6.jpeg\n/uploads/1062889_600_29c813e7bb.jpeg\n/uploads/f63d8e42d0fa44f184c69576f77a_19a34fb789.jpeg\n/uploads/600x380_29e69f9cf7.jpeg\n/uploads/sddefault_e815c40fed.jpeg\n/uploads/kinopoisk_ru_Stockholm_2_C_My_Love_3458597_125b341b3c.jpeg\n/uploads/maxresdefault_04027c182c.jpeg\n/uploads/0001_76c25905da.jpeg\n/uploads/challenge_6_2000x869_51ced1214b.jpeg\n/uploads/rem_koolhaas_in_venice_2014_image_tomas_koolhaas_c88566c140.jpeg\n/uploads/zagruzhennoe_1_2e377c1bed.jpeg\n/uploads/tetragrammaton_3032831_7345d2be9b.jpeg\n/uploads/mamleev_1_1200x630_80075a241e.jpeg\n/uploads/95182_c923d140df.png\n/uploads/280x178_2_f53364a363.jpeg\n/uploads/2_43_1009401e3b.jpeg\n/uploads/twothree_1_2000x869_b84e29b069.jpeg\n/uploads/a3365cbf4d37ce2be6377cb29240e015_e54f928a4a.jpeg\n/uploads/Trailer_Thumbnail_v2_f93b84bae3.jpeg\n/uploads/1005x558_20180611112745a84cdb6853_207389185c.jpeg\n/uploads/zagruzhennoe_0452298b2b.jpeg\n/uploads/zagruzhennoe_1_abf766fea9.jpeg\n/uploads/C1_Vu_Acsdz_MY_727ba0c04a.jpeg\n/uploads/zagruzhennoe_2_9d38eea933.jpeg\n/uploads/2_AQ_sbvju_Rqpu_UP_9m_BQ_y_IXF_usg1_Q_vjae_Avq_Eovvs_I1_M_81fb0dc307.jpeg\n/uploads/word1_f7db41ec2c.jpeg\n/uploads/d3662037577f2479bbe5d96f2ae17b77e85933c22e50f4be481bbd69d90e1a5f_fdc1f29e58.jpeg\n/uploads/zagruzhennoe_3_a42111e53f.jpeg\n/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg\n/uploads/0_b389b72805.jpeg\n/uploads/content_Mountain_Movie_201caecdbf.jpeg\n/uploads/unnamed_e16c34a51a.jpeg\n/uploads/drib_1_1200x630_61aeb78757.jpeg\n/uploads/280x178_2_622e3d04db.jpeg\n/uploads/zagruzhennoe_4_729e7917e3.jpeg\n/uploads/FDC_3i7d_Ce_Zc2_Mk_RGLKP_f_KURIFG_gyc_X5_P3g4_B0wx8c_E_52a0fa86d7.jpeg\n/uploads/zagruzhennoe_5_259295f4a9.jpeg",
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T20:39:50.486Z",
      "updated_at": "2020-12-02T20:39:50.486Z"
  }
},
{
  "id": 8,
  "nameRU": "Soul Power",
  "nameEN": "Soul Power",
  "director": "Джеффри Леви-Хинте",
  "country": "США",
  "year": "2008",
  "duration": 92,
  "description": "Мухаммед Али против Джеймса Брауна\nХроника трехдневного соул-фестиваля в Заире в 1974 году, приуроченного к историческому бою Мухаммеда Али против Джорджа Формана (также известного как Rumble in the Jungle), — кровь, пот и Джеймс Браун, садящийся на шпагат на глазах у стотысячного стадиона. Скроенный из того же архивного материала, что лег в основу знаменитой боксерской ленты «When We Were Kings», этот фильм представляет собой пошаговую инструкцию «Как сделать громадный фестиваль в Африке: от первой гайки до последней песни».\n",
  "trailerLink": "https://www.youtube.com/watch?v=8OprNgiOq-I",
  "created_at": "2020-12-02T20:57:31.683Z",
  "updated_at": "2020-12-02T20:57:31.683Z",
  "image": {
      "id": 8,
      "name": "images",
      "alternativeText": "",
      "caption": "",
      "width": 266,
      "height": 189,
      "formats": {
          "thumbnail": {
              "hash": "thumbnail_images_5bfcbf36e6",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 220,
              "height": 156,
              "size": 8.89,
              "path": null,
              "url": "/uploads/thumbnail_images_5bfcbf36e6.jpeg"
          }
      },
      "hash": "images_5bfcbf36e6",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 10.06,
      "url": "/uploads/images_5bfcbf36e6.jpeg",
      "previewUrl": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg\n/uploads/all_tommoros_parties_33a125248d.jpeg\n/uploads/blur_a43fcf463d.jpeg\n/uploads/zagruzhennoe_113f557116.jpeg\n/uploads/taqwacore2_2f487d2e74.jpeg\n/uploads/881707734_640_d6a3a43358.jpeg\n/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg\n/uploads/images_5bfcbf36e6.jpeg\n/uploads/zagruzhennoe_1_fd5faff237.jpeg\n/uploads/images_244e1fd56f.jpeg\n/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg\n/uploads/590x400_2eccd40a93.jpeg\n/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg\n/uploads/1_6a9e0669ca.jpeg\n/uploads/zagruzhennoe_cba9c9f900.jpeg\n/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg\n/uploads/280x178_2_f2eee77cae.jpeg\n/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg\n/uploads/Backyard_327_3_2151980c5c.jpeg\n/uploads/zagruzhennoe_2_5f87844408.jpeg\n/uploads/maxresdefault_505b3fa578.jpeg\n/uploads/b1_3385dd88fe.jpeg\n/uploads/9c3adee646635c6aa56a229dbe9b9779_original_8b382dc3ec.jpeg\n/uploads/740x457_2016090618140134690b5589_07f872345d.jpeg\n/uploads/667708311_1280x720_558f3de42b.jpeg\n/uploads/inni_13_fb13830e94.jpeg\n/uploads/AAACDZTO_o_OJ_yo_Sf_EXLJ_5_J1u_J_r7j_FNH_vrcn_OAU_a_UX_s_Ljl6t_DBSZ_7_YPUDVPA_i_Cs1_Cje_y_Hb9_M8zvf6_DX_n_Qtux_Qa_SD_r_I_ea7df93d26.jpeg\n/uploads/amma_lo_fi_739aeb0890.jpeg\n/uploads/750x485_28d08c49c4.jpeg\n/uploads/zagruzhennoe_53d33dc9df.jpeg\n/uploads/TEENAGE_3_600_3b1cce5358.jpeg\n/uploads/unnamed_aa708a91a1.jpeg\n/uploads/133633090dfcb40e8e87ecf6cb52c419_c534c1283c.jpeg\n/uploads/zagruzhennoe_1_38e987f181.jpeg\n/uploads/Shut_Up_Hits_poster_f5bb0d6e83.jpeg\n/uploads/Art_Cinema_Webslug_Mr_Baker_de10be970f.jpeg\n/uploads/embed_still_available_now_8e4038f1f6.jpeg\n/uploads/704543546_960_d6340bce70.jpeg\n/uploads/Oil_City_Confidential_676986530_large_652c54fa63.jpeg\n/uploads/5a8db56aa48049529df13a2d2ab0_be34c45c62.jpeg\n/uploads/zagruzhennoe_58e5329700.jpeg\n/uploads/zagruzhennoe_1_9994d6db60.jpeg\n/uploads/BM_uc_YK_d_P4jn9lp_QF_7_Ew8z8_micr_f849e20df3.jpeg\n/uploads/ORCHARD_888003020894_Full_Image_Gallery_Cover_en_US_1551076193509_UY_500_UX_667_RI_VX_n_Xh_LAZXKUVW_a_NQPF_j2_CR_q_Ehjv_ERHT_od_TTW_0a20f1d30d.jpeg\n/uploads/zagruzhennoe_2_17bcd9ceff.jpeg\n/uploads/zagruzhennoe_3_312a12853b.jpeg\n/uploads/750x485_a07b1b2585.jpeg\n/uploads/14e1f2912a2a169b11820e3163df6c69_a01189ce50.jpeg\n/uploads/unnamed_0256d7127c.jpeg\n/uploads/zagruzhennoe_7326b1cb5f.jpeg\n/uploads/15786_oldschool_renegades_docu_c54f63dfc1.jpeg\n/uploads/552242179_1280x720_66bc43b289.jpeg\n/uploads/Super_Duper_Alice_Cooper_2014_8b1641fbaf.jpeg\n/uploads/orig_bc3e53efa8.jpeg\n/uploads/zagruzhennoe_1_1817cd23a2.jpeg\n/uploads/zagruzhennoe_2_c709860078.jpeg\n/uploads/zagruzhennoe_3_08092046af.jpeg\n/uploads/images_0bbc035397.jpeg\n/uploads/77e84d33e7f526823bd23362c6e66261_a9c0fb3836.jpeg\n/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png\n/uploads/Snimok_ekrana_2020_12_03_v_16_00_28_a851176a2d.png\n/uploads/Werewolves_Across_America_3f48106062.jpeg\n/uploads/zagruzhennoe_edcf93eb96.jpeg\n/uploads/maxresdefault_88702f9bc0.jpeg\n/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg\n/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg\n/uploads/zagruzhennoe_1_3b8b337f95.jpeg\n/uploads/unnamed_0bd470956a.jpeg\n/uploads/705753536_1280x720_3f3ec9830f.jpeg\n/uploads/wyr_139_03_7a244dbd6e.jpeg\n/uploads/zagruzhennoe_b22b6e2887.jpeg\n/uploads/images_d789f0a61a.jpeg\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_913b905856.png\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_707fba4597.png\n/uploads/maxresdefault_21f787cdf3.jpeg\n/uploads/maxresdefault_1_0cda104e49.jpeg\n/uploads/maxresdefault_2_3072271808.jpeg\n/uploads/images_f324307a7f.jpeg\n/uploads/unnamed_4f99c0fa1e.jpeg\n/uploads/zagruzhennoe_a32e347316.jpeg\n/uploads/maxresdefault_164e1c974c.jpeg\n/uploads/b80915f7_d774_4536_9e79_450578a40ad4_9131a274_04cd1fb520.jpeg\n/uploads/12032_770x433_74026cdeb6.jpeg\n/uploads/zagruzhennoe_1_70b0c1a682.jpeg\n/uploads/maxresdefault_1_5bef2a2c64.jpeg\n/uploads/750x485_6aa18b04bb.jpeg\n/uploads/3_29_4b376917c9.jpeg\n/uploads/upload_9120ff30_fa73_11e5_b942_b366214b09de_ff4e9a16b9.jpeg\n/uploads/zagruzhennoe_2_946c91c6d8.jpeg\n/uploads/maxresdefault_2_4747cae75c.jpeg\n/uploads/den_unge_zlatan_aca9a6118e.jpeg\n/uploads/zagruzhennoe_3_6dab3dce0f.jpeg\n/uploads/zagruzhennoe_4_63633dbd00.jpeg\n/uploads/81c_6f_Ledf_L_RI_13c54761cc.jpeg\n/uploads/zagruzhennoe_8e5b14a44a.jpeg\n/uploads/zagruzhennoe_1_1aee5f7ecf.jpeg\n/uploads/mqdefault_14f34c8254.jpeg\n/uploads/zagruzhennoe_2_d22375c7cf.jpeg\n/uploads/zagruzhennoe_3_c78d64a9f0.jpeg\n/uploads/zagruzhennoe_4_43cd3f60e9.jpeg\n/uploads/big_davidandthespidersper011_2cef9d8735.jpeg\n/uploads/maxresdefault_c1369083db.jpeg\n/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg\n/uploads/d17ab991_15c3_47ca_b1fb_a26f934df98a_1_f2bebed5f8.jpeg\n/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg\n/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg\n/uploads/280x178_2_6598614535.jpeg\n/uploads/8bf194589919a057d7e55e6e0bc38735_0978fd8db5.jpeg\n/uploads/3a98ad3e71cfbedb0b2466370045316b_1_784d43f041.jpeg\n/uploads/Laurie_Anderson_Heart_of_a_Dog_3_c372653d1e.jpeg\n/uploads/maxresdefault_205d90151c.jpeg\n/uploads/zagruzhennoe_c6067b77eb.jpeg\n/uploads/Screen_Shot_2017_01_04_at_17_16_53_252ea5e2ed.png\n/uploads/maxresdefault_1_612cb16fc7.jpeg\n/uploads/maxresdefault_2_93b16a93b2.jpeg\n/uploads/zagruzhennoe_1_a1e063a238.jpeg\n/uploads/e36bad4f2265_ba51cc6359.jpeg\n/uploads/cairo_city_16051300_02_03_06_Still003_cabb6565ed.jpeg\n/uploads/maxresdefault_3_6405ad0751.jpeg\n/uploads/maxresdefault_4_ec1bd9b10e.jpeg\n/uploads/088af76dd77ab1a163a5383e7e7e7d54_99e2e11589.jpeg\n/uploads/a53ab962_077a_4070_ac84_c17147e8fb16_1_4e37b08263.jpeg\n/uploads/unnamed_359b8cf568.jpeg\n/uploads/FBD_5_B97_D_D7_D5_47_CE_8_BB_6_2_EB_7_F984930_B_cx0_cy4_cw0_w1080_h608_4389f95b4f.jpeg\n/uploads/280x178_2_c754a5b367.jpeg\n/uploads/upload_TASS_1208585_pic905_895x505_34010_8e95098253.jpeg\n/uploads/man_f_3d0de1e8ca.jpeg\n/uploads/zagruzhennoe_efde9fa49e.jpeg\n/uploads/p520_1230881_81aa5bbd41.jpeg\n/uploads/f7946f5351da49b8141e7a11123070cc_0bb6969ffa.jpeg\n/uploads/24fcf0b4ded34dbc8a6792d7fd39_44a7662e50.jpeg\n/uploads/43cfd54bcf44422999d5197f24db_b750bba458.jpeg\n/uploads/440796_ffb2d02a21.jpeg\n/uploads/zagruzhennoe_06c31828c6.jpeg\n/uploads/1062889_600_29c813e7bb.jpeg\n/uploads/f63d8e42d0fa44f184c69576f77a_19a34fb789.jpeg\n/uploads/600x380_29e69f9cf7.jpeg\n/uploads/sddefault_e815c40fed.jpeg\n/uploads/kinopoisk_ru_Stockholm_2_C_My_Love_3458597_125b341b3c.jpeg\n/uploads/maxresdefault_04027c182c.jpeg\n/uploads/0001_76c25905da.jpeg\n/uploads/challenge_6_2000x869_51ced1214b.jpeg\n/uploads/rem_koolhaas_in_venice_2014_image_tomas_koolhaas_c88566c140.jpeg\n/uploads/zagruzhennoe_1_2e377c1bed.jpeg\n/uploads/tetragrammaton_3032831_7345d2be9b.jpeg\n/uploads/mamleev_1_1200x630_80075a241e.jpeg\n/uploads/95182_c923d140df.png\n/uploads/280x178_2_f53364a363.jpeg\n/uploads/2_43_1009401e3b.jpeg\n/uploads/twothree_1_2000x869_b84e29b069.jpeg\n/uploads/a3365cbf4d37ce2be6377cb29240e015_e54f928a4a.jpeg\n/uploads/Trailer_Thumbnail_v2_f93b84bae3.jpeg\n/uploads/1005x558_20180611112745a84cdb6853_207389185c.jpeg\n/uploads/zagruzhennoe_0452298b2b.jpeg\n/uploads/zagruzhennoe_1_abf766fea9.jpeg\n/uploads/C1_Vu_Acsdz_MY_727ba0c04a.jpeg\n/uploads/zagruzhennoe_2_9d38eea933.jpeg\n/uploads/2_AQ_sbvju_Rqpu_UP_9m_BQ_y_IXF_usg1_Q_vjae_Avq_Eovvs_I1_M_81fb0dc307.jpeg\n/uploads/word1_f7db41ec2c.jpeg\n/uploads/d3662037577f2479bbe5d96f2ae17b77e85933c22e50f4be481bbd69d90e1a5f_fdc1f29e58.jpeg\n/uploads/zagruzhennoe_3_a42111e53f.jpeg\n/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg\n/uploads/0_b389b72805.jpeg\n/uploads/content_Mountain_Movie_201caecdbf.jpeg\n/uploads/unnamed_e16c34a51a.jpeg\n/uploads/drib_1_1200x630_61aeb78757.jpeg\n/uploads/280x178_2_622e3d04db.jpeg\n/uploads/zagruzhennoe_4_729e7917e3.jpeg\n/uploads/FDC_3i7d_Ce_Zc2_Mk_RGLKP_f_KURIFG_gyc_X5_P3g4_B0wx8c_E_52a0fa86d7.jpeg\n/uploads/zagruzhennoe_5_259295f4a9.jpeg",
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T20:57:25.729Z",
      "updated_at": "2020-12-02T20:57:25.729Z"
  }
},
{
  "id": 9,
  "nameRU": " 196 ударов в минуту",
  "nameEN": "196 BPM",
  "director": "Ромуальд Кармакар",
  "country": "Германия",
  "year": "2003",
  "duration": 60,
  "description": "Панорамный взгляд на берлинский Лав-парад 2002-го года с трех разных точек зрения, каждая из которых образует отдельную новеллу. Первая, «Интро», показывает происходящее глазами людей, стоящих у входа в клуб Linientreu; вторая, «Габба», переносит зрителя в гущу толпы на площади Брайтшайдплац, где диджейские вертушки установлены даже в кебабной. И третья, «Хелл за работой», дает исчерпывающее представление о том, как DJ Hell сводит пластинки во время своего сета в WMF.",
  "trailerLink": "https://www.youtube.com/watch?v=GsDRVpdgNJ4",
  "created_at": "2020-12-02T20:59:53.997Z",
  "updated_at": "2020-12-02T20:59:53.997Z",
  "image": {
      "id": 9,
      "name": "загруженное (1)",
      "alternativeText": "",
      "caption": "",
      "width": 560,
      "height": 292,
      "formats": {
          "thumbnail": {
              "hash": "thumbnail_zagruzhennoe_1_fd5faff237",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 245,
              "height": 128,
              "size": 5.57,
              "path": null,
              "url": "/uploads/thumbnail_zagruzhennoe_1_fd5faff237.jpeg"
          },
          "small": {
              "hash": "small_zagruzhennoe_1_fd5faff237",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 500,
              "height": 261,
              "size": 17.87,
              "path": null,
              "url": "/uploads/small_zagruzhennoe_1_fd5faff237.jpeg"
          }
      },
      "hash": "zagruzhennoe_1_fd5faff237",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 19.39,
      "url": "/uploads/zagruzhennoe_1_fd5faff237.jpeg",
      "previewUrl": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg\n/uploads/all_tommoros_parties_33a125248d.jpeg\n/uploads/blur_a43fcf463d.jpeg\n/uploads/zagruzhennoe_113f557116.jpeg\n/uploads/taqwacore2_2f487d2e74.jpeg\n/uploads/881707734_640_d6a3a43358.jpeg\n/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg\n/uploads/images_5bfcbf36e6.jpeg\n/uploads/zagruzhennoe_1_fd5faff237.jpeg\n/uploads/images_244e1fd56f.jpeg\n/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg\n/uploads/590x400_2eccd40a93.jpeg\n/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg\n/uploads/1_6a9e0669ca.jpeg\n/uploads/zagruzhennoe_cba9c9f900.jpeg\n/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg\n/uploads/280x178_2_f2eee77cae.jpeg\n/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg\n/uploads/Backyard_327_3_2151980c5c.jpeg\n/uploads/zagruzhennoe_2_5f87844408.jpeg\n/uploads/maxresdefault_505b3fa578.jpeg\n/uploads/b1_3385dd88fe.jpeg\n/uploads/9c3adee646635c6aa56a229dbe9b9779_original_8b382dc3ec.jpeg\n/uploads/740x457_2016090618140134690b5589_07f872345d.jpeg\n/uploads/667708311_1280x720_558f3de42b.jpeg\n/uploads/inni_13_fb13830e94.jpeg\n/uploads/AAACDZTO_o_OJ_yo_Sf_EXLJ_5_J1u_J_r7j_FNH_vrcn_OAU_a_UX_s_Ljl6t_DBSZ_7_YPUDVPA_i_Cs1_Cje_y_Hb9_M8zvf6_DX_n_Qtux_Qa_SD_r_I_ea7df93d26.jpeg\n/uploads/amma_lo_fi_739aeb0890.jpeg\n/uploads/750x485_28d08c49c4.jpeg\n/uploads/zagruzhennoe_53d33dc9df.jpeg\n/uploads/TEENAGE_3_600_3b1cce5358.jpeg\n/uploads/unnamed_aa708a91a1.jpeg\n/uploads/133633090dfcb40e8e87ecf6cb52c419_c534c1283c.jpeg\n/uploads/zagruzhennoe_1_38e987f181.jpeg\n/uploads/Shut_Up_Hits_poster_f5bb0d6e83.jpeg\n/uploads/Art_Cinema_Webslug_Mr_Baker_de10be970f.jpeg\n/uploads/embed_still_available_now_8e4038f1f6.jpeg\n/uploads/704543546_960_d6340bce70.jpeg\n/uploads/Oil_City_Confidential_676986530_large_652c54fa63.jpeg\n/uploads/5a8db56aa48049529df13a2d2ab0_be34c45c62.jpeg\n/uploads/zagruzhennoe_58e5329700.jpeg\n/uploads/zagruzhennoe_1_9994d6db60.jpeg\n/uploads/BM_uc_YK_d_P4jn9lp_QF_7_Ew8z8_micr_f849e20df3.jpeg\n/uploads/ORCHARD_888003020894_Full_Image_Gallery_Cover_en_US_1551076193509_UY_500_UX_667_RI_VX_n_Xh_LAZXKUVW_a_NQPF_j2_CR_q_Ehjv_ERHT_od_TTW_0a20f1d30d.jpeg\n/uploads/zagruzhennoe_2_17bcd9ceff.jpeg\n/uploads/zagruzhennoe_3_312a12853b.jpeg\n/uploads/750x485_a07b1b2585.jpeg\n/uploads/14e1f2912a2a169b11820e3163df6c69_a01189ce50.jpeg\n/uploads/unnamed_0256d7127c.jpeg\n/uploads/zagruzhennoe_7326b1cb5f.jpeg\n/uploads/15786_oldschool_renegades_docu_c54f63dfc1.jpeg\n/uploads/552242179_1280x720_66bc43b289.jpeg\n/uploads/Super_Duper_Alice_Cooper_2014_8b1641fbaf.jpeg\n/uploads/orig_bc3e53efa8.jpeg\n/uploads/zagruzhennoe_1_1817cd23a2.jpeg\n/uploads/zagruzhennoe_2_c709860078.jpeg\n/uploads/zagruzhennoe_3_08092046af.jpeg\n/uploads/images_0bbc035397.jpeg\n/uploads/77e84d33e7f526823bd23362c6e66261_a9c0fb3836.jpeg\n/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png\n/uploads/Snimok_ekrana_2020_12_03_v_16_00_28_a851176a2d.png\n/uploads/Werewolves_Across_America_3f48106062.jpeg\n/uploads/zagruzhennoe_edcf93eb96.jpeg\n/uploads/maxresdefault_88702f9bc0.jpeg\n/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg\n/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg\n/uploads/zagruzhennoe_1_3b8b337f95.jpeg\n/uploads/unnamed_0bd470956a.jpeg\n/uploads/705753536_1280x720_3f3ec9830f.jpeg\n/uploads/wyr_139_03_7a244dbd6e.jpeg\n/uploads/zagruzhennoe_b22b6e2887.jpeg\n/uploads/images_d789f0a61a.jpeg\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_913b905856.png\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_707fba4597.png\n/uploads/maxresdefault_21f787cdf3.jpeg\n/uploads/maxresdefault_1_0cda104e49.jpeg\n/uploads/maxresdefault_2_3072271808.jpeg\n/uploads/images_f324307a7f.jpeg\n/uploads/unnamed_4f99c0fa1e.jpeg\n/uploads/zagruzhennoe_a32e347316.jpeg\n/uploads/maxresdefault_164e1c974c.jpeg\n/uploads/b80915f7_d774_4536_9e79_450578a40ad4_9131a274_04cd1fb520.jpeg\n/uploads/12032_770x433_74026cdeb6.jpeg\n/uploads/zagruzhennoe_1_70b0c1a682.jpeg\n/uploads/maxresdefault_1_5bef2a2c64.jpeg\n/uploads/750x485_6aa18b04bb.jpeg\n/uploads/3_29_4b376917c9.jpeg\n/uploads/upload_9120ff30_fa73_11e5_b942_b366214b09de_ff4e9a16b9.jpeg\n/uploads/zagruzhennoe_2_946c91c6d8.jpeg\n/uploads/maxresdefault_2_4747cae75c.jpeg\n/uploads/den_unge_zlatan_aca9a6118e.jpeg\n/uploads/zagruzhennoe_3_6dab3dce0f.jpeg\n/uploads/zagruzhennoe_4_63633dbd00.jpeg\n/uploads/81c_6f_Ledf_L_RI_13c54761cc.jpeg\n/uploads/zagruzhennoe_8e5b14a44a.jpeg\n/uploads/zagruzhennoe_1_1aee5f7ecf.jpeg\n/uploads/mqdefault_14f34c8254.jpeg\n/uploads/zagruzhennoe_2_d22375c7cf.jpeg\n/uploads/zagruzhennoe_3_c78d64a9f0.jpeg\n/uploads/zagruzhennoe_4_43cd3f60e9.jpeg\n/uploads/big_davidandthespidersper011_2cef9d8735.jpeg\n/uploads/maxresdefault_c1369083db.jpeg\n/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg\n/uploads/d17ab991_15c3_47ca_b1fb_a26f934df98a_1_f2bebed5f8.jpeg\n/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg\n/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg\n/uploads/280x178_2_6598614535.jpeg\n/uploads/8bf194589919a057d7e55e6e0bc38735_0978fd8db5.jpeg\n/uploads/3a98ad3e71cfbedb0b2466370045316b_1_784d43f041.jpeg\n/uploads/Laurie_Anderson_Heart_of_a_Dog_3_c372653d1e.jpeg\n/uploads/maxresdefault_205d90151c.jpeg\n/uploads/zagruzhennoe_c6067b77eb.jpeg\n/uploads/Screen_Shot_2017_01_04_at_17_16_53_252ea5e2ed.png\n/uploads/maxresdefault_1_612cb16fc7.jpeg\n/uploads/maxresdefault_2_93b16a93b2.jpeg\n/uploads/zagruzhennoe_1_a1e063a238.jpeg\n/uploads/e36bad4f2265_ba51cc6359.jpeg\n/uploads/cairo_city_16051300_02_03_06_Still003_cabb6565ed.jpeg\n/uploads/maxresdefault_3_6405ad0751.jpeg\n/uploads/maxresdefault_4_ec1bd9b10e.jpeg\n/uploads/088af76dd77ab1a163a5383e7e7e7d54_99e2e11589.jpeg\n/uploads/a53ab962_077a_4070_ac84_c17147e8fb16_1_4e37b08263.jpeg\n/uploads/unnamed_359b8cf568.jpeg\n/uploads/FBD_5_B97_D_D7_D5_47_CE_8_BB_6_2_EB_7_F984930_B_cx0_cy4_cw0_w1080_h608_4389f95b4f.jpeg\n/uploads/280x178_2_c754a5b367.jpeg\n/uploads/upload_TASS_1208585_pic905_895x505_34010_8e95098253.jpeg\n/uploads/man_f_3d0de1e8ca.jpeg\n/uploads/zagruzhennoe_efde9fa49e.jpeg\n/uploads/p520_1230881_81aa5bbd41.jpeg\n/uploads/f7946f5351da49b8141e7a11123070cc_0bb6969ffa.jpeg\n/uploads/24fcf0b4ded34dbc8a6792d7fd39_44a7662e50.jpeg\n/uploads/43cfd54bcf44422999d5197f24db_b750bba458.jpeg\n/uploads/440796_ffb2d02a21.jpeg\n/uploads/zagruzhennoe_06c31828c6.jpeg\n/uploads/1062889_600_29c813e7bb.jpeg\n/uploads/f63d8e42d0fa44f184c69576f77a_19a34fb789.jpeg\n/uploads/600x380_29e69f9cf7.jpeg\n/uploads/sddefault_e815c40fed.jpeg\n/uploads/kinopoisk_ru_Stockholm_2_C_My_Love_3458597_125b341b3c.jpeg\n/uploads/maxresdefault_04027c182c.jpeg\n/uploads/0001_76c25905da.jpeg\n/uploads/challenge_6_2000x869_51ced1214b.jpeg\n/uploads/rem_koolhaas_in_venice_2014_image_tomas_koolhaas_c88566c140.jpeg\n/uploads/zagruzhennoe_1_2e377c1bed.jpeg\n/uploads/tetragrammaton_3032831_7345d2be9b.jpeg\n/uploads/mamleev_1_1200x630_80075a241e.jpeg\n/uploads/95182_c923d140df.png\n/uploads/280x178_2_f53364a363.jpeg\n/uploads/2_43_1009401e3b.jpeg\n/uploads/twothree_1_2000x869_b84e29b069.jpeg\n/uploads/a3365cbf4d37ce2be6377cb29240e015_e54f928a4a.jpeg\n/uploads/Trailer_Thumbnail_v2_f93b84bae3.jpeg\n/uploads/1005x558_20180611112745a84cdb6853_207389185c.jpeg\n/uploads/zagruzhennoe_0452298b2b.jpeg\n/uploads/zagruzhennoe_1_abf766fea9.jpeg\n/uploads/C1_Vu_Acsdz_MY_727ba0c04a.jpeg\n/uploads/zagruzhennoe_2_9d38eea933.jpeg\n/uploads/2_AQ_sbvju_Rqpu_UP_9m_BQ_y_IXF_usg1_Q_vjae_Avq_Eovvs_I1_M_81fb0dc307.jpeg\n/uploads/word1_f7db41ec2c.jpeg\n/uploads/d3662037577f2479bbe5d96f2ae17b77e85933c22e50f4be481bbd69d90e1a5f_fdc1f29e58.jpeg\n/uploads/zagruzhennoe_3_a42111e53f.jpeg\n/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg\n/uploads/0_b389b72805.jpeg\n/uploads/content_Mountain_Movie_201caecdbf.jpeg\n/uploads/unnamed_e16c34a51a.jpeg\n/uploads/drib_1_1200x630_61aeb78757.jpeg\n/uploads/280x178_2_622e3d04db.jpeg\n/uploads/zagruzhennoe_4_729e7917e3.jpeg\n/uploads/FDC_3i7d_Ce_Zc2_Mk_RGLKP_f_KURIFG_gyc_X5_P3g4_B0wx8c_E_52a0fa86d7.jpeg\n/uploads/zagruzhennoe_5_259295f4a9.jpeg",
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T20:59:37.364Z",
      "updated_at": "2020-12-02T20:59:37.364Z"
  }
},
{
  "id": 10,
  "nameRU": " Hit So Hard: Школа жизни Патти Шемель",
  "nameEN": "Hit So Hard: The Life & Near Death Story of Patty Schemel",
  "director": "П.Дэвид Эберсол",
  "country": "США",
  "year": "2011",
  "duration": 103,
  "description": "Это история о тех, кто выжил в 90-е, рассказанная от первого лица: Патти Шемель, барабанщица «золотого» состава группы Hole, открытая лесбиянка и подруга Курта Кобейна, сняла более сорока часов видео на 8-миллиметровую пленку еще в самом начале девяностых. Кобейн, держащий на руках дочь, Кортни Лав, бренчащая что-то на гитаре, сама Патти, зачитывающая в слух итоговой номер Rolling Stone за 94-й год — все это легло в основу Hit So Hard, в котором Дэвид Эбесол реконструирует историю всего беспробудного, безнадежного и до сих пор притягательного поколения 90-х",
  "trailerLink": "https://www.youtube.com/watch?v=DMvFMeaGj_w",
  "created_at": "2020-12-02T21:02:28.791Z",
  "updated_at": "2020-12-02T21:02:28.791Z",
  "image": {
      "id": 10,
      "name": "images",
      "alternativeText": "",
      "caption": "",
      "width": 300,
      "height": 168,
      "formats": {
          "thumbnail": {
              "hash": "thumbnail_images_244e1fd56f",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 245,
              "height": 137,
              "size": 11.76,
              "path": null,
              "url": "/uploads/thumbnail_images_244e1fd56f.jpeg"
          }
      },
      "hash": "images_244e1fd56f",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 14.8,
      "url": "/uploads/images_244e1fd56f.jpeg",
      "previewUrl": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg\n/uploads/all_tommoros_parties_33a125248d.jpeg\n/uploads/blur_a43fcf463d.jpeg\n/uploads/zagruzhennoe_113f557116.jpeg\n/uploads/taqwacore2_2f487d2e74.jpeg\n/uploads/881707734_640_d6a3a43358.jpeg\n/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg\n/uploads/images_5bfcbf36e6.jpeg\n/uploads/zagruzhennoe_1_fd5faff237.jpeg\n/uploads/images_244e1fd56f.jpeg\n/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg\n/uploads/590x400_2eccd40a93.jpeg\n/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg\n/uploads/1_6a9e0669ca.jpeg\n/uploads/zagruzhennoe_cba9c9f900.jpeg\n/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg\n/uploads/280x178_2_f2eee77cae.jpeg\n/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg\n/uploads/Backyard_327_3_2151980c5c.jpeg\n/uploads/zagruzhennoe_2_5f87844408.jpeg\n/uploads/maxresdefault_505b3fa578.jpeg\n/uploads/b1_3385dd88fe.jpeg\n/uploads/9c3adee646635c6aa56a229dbe9b9779_original_8b382dc3ec.jpeg\n/uploads/740x457_2016090618140134690b5589_07f872345d.jpeg\n/uploads/667708311_1280x720_558f3de42b.jpeg\n/uploads/inni_13_fb13830e94.jpeg\n/uploads/AAACDZTO_o_OJ_yo_Sf_EXLJ_5_J1u_J_r7j_FNH_vrcn_OAU_a_UX_s_Ljl6t_DBSZ_7_YPUDVPA_i_Cs1_Cje_y_Hb9_M8zvf6_DX_n_Qtux_Qa_SD_r_I_ea7df93d26.jpeg\n/uploads/amma_lo_fi_739aeb0890.jpeg\n/uploads/750x485_28d08c49c4.jpeg\n/uploads/zagruzhennoe_53d33dc9df.jpeg\n/uploads/TEENAGE_3_600_3b1cce5358.jpeg\n/uploads/unnamed_aa708a91a1.jpeg\n/uploads/133633090dfcb40e8e87ecf6cb52c419_c534c1283c.jpeg\n/uploads/zagruzhennoe_1_38e987f181.jpeg\n/uploads/Shut_Up_Hits_poster_f5bb0d6e83.jpeg\n/uploads/Art_Cinema_Webslug_Mr_Baker_de10be970f.jpeg\n/uploads/embed_still_available_now_8e4038f1f6.jpeg\n/uploads/704543546_960_d6340bce70.jpeg\n/uploads/Oil_City_Confidential_676986530_large_652c54fa63.jpeg\n/uploads/5a8db56aa48049529df13a2d2ab0_be34c45c62.jpeg\n/uploads/zagruzhennoe_58e5329700.jpeg\n/uploads/zagruzhennoe_1_9994d6db60.jpeg\n/uploads/BM_uc_YK_d_P4jn9lp_QF_7_Ew8z8_micr_f849e20df3.jpeg\n/uploads/ORCHARD_888003020894_Full_Image_Gallery_Cover_en_US_1551076193509_UY_500_UX_667_RI_VX_n_Xh_LAZXKUVW_a_NQPF_j2_CR_q_Ehjv_ERHT_od_TTW_0a20f1d30d.jpeg\n/uploads/zagruzhennoe_2_17bcd9ceff.jpeg\n/uploads/zagruzhennoe_3_312a12853b.jpeg\n/uploads/750x485_a07b1b2585.jpeg\n/uploads/14e1f2912a2a169b11820e3163df6c69_a01189ce50.jpeg\n/uploads/unnamed_0256d7127c.jpeg\n/uploads/zagruzhennoe_7326b1cb5f.jpeg\n/uploads/15786_oldschool_renegades_docu_c54f63dfc1.jpeg\n/uploads/552242179_1280x720_66bc43b289.jpeg\n/uploads/Super_Duper_Alice_Cooper_2014_8b1641fbaf.jpeg\n/uploads/orig_bc3e53efa8.jpeg\n/uploads/zagruzhennoe_1_1817cd23a2.jpeg\n/uploads/zagruzhennoe_2_c709860078.jpeg\n/uploads/zagruzhennoe_3_08092046af.jpeg\n/uploads/images_0bbc035397.jpeg\n/uploads/77e84d33e7f526823bd23362c6e66261_a9c0fb3836.jpeg\n/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png\n/uploads/Snimok_ekrana_2020_12_03_v_16_00_28_a851176a2d.png\n/uploads/Werewolves_Across_America_3f48106062.jpeg\n/uploads/zagruzhennoe_edcf93eb96.jpeg\n/uploads/maxresdefault_88702f9bc0.jpeg\n/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg\n/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg\n/uploads/zagruzhennoe_1_3b8b337f95.jpeg\n/uploads/unnamed_0bd470956a.jpeg\n/uploads/705753536_1280x720_3f3ec9830f.jpeg\n/uploads/wyr_139_03_7a244dbd6e.jpeg\n/uploads/zagruzhennoe_b22b6e2887.jpeg\n/uploads/images_d789f0a61a.jpeg\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_913b905856.png\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_707fba4597.png\n/uploads/maxresdefault_21f787cdf3.jpeg\n/uploads/maxresdefault_1_0cda104e49.jpeg\n/uploads/maxresdefault_2_3072271808.jpeg\n/uploads/images_f324307a7f.jpeg\n/uploads/unnamed_4f99c0fa1e.jpeg\n/uploads/zagruzhennoe_a32e347316.jpeg\n/uploads/maxresdefault_164e1c974c.jpeg\n/uploads/b80915f7_d774_4536_9e79_450578a40ad4_9131a274_04cd1fb520.jpeg\n/uploads/12032_770x433_74026cdeb6.jpeg\n/uploads/zagruzhennoe_1_70b0c1a682.jpeg\n/uploads/maxresdefault_1_5bef2a2c64.jpeg\n/uploads/750x485_6aa18b04bb.jpeg\n/uploads/3_29_4b376917c9.jpeg\n/uploads/upload_9120ff30_fa73_11e5_b942_b366214b09de_ff4e9a16b9.jpeg\n/uploads/zagruzhennoe_2_946c91c6d8.jpeg\n/uploads/maxresdefault_2_4747cae75c.jpeg\n/uploads/den_unge_zlatan_aca9a6118e.jpeg\n/uploads/zagruzhennoe_3_6dab3dce0f.jpeg\n/uploads/zagruzhennoe_4_63633dbd00.jpeg\n/uploads/81c_6f_Ledf_L_RI_13c54761cc.jpeg\n/uploads/zagruzhennoe_8e5b14a44a.jpeg\n/uploads/zagruzhennoe_1_1aee5f7ecf.jpeg\n/uploads/mqdefault_14f34c8254.jpeg\n/uploads/zagruzhennoe_2_d22375c7cf.jpeg\n/uploads/zagruzhennoe_3_c78d64a9f0.jpeg\n/uploads/zagruzhennoe_4_43cd3f60e9.jpeg\n/uploads/big_davidandthespidersper011_2cef9d8735.jpeg\n/uploads/maxresdefault_c1369083db.jpeg\n/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg\n/uploads/d17ab991_15c3_47ca_b1fb_a26f934df98a_1_f2bebed5f8.jpeg\n/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg\n/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg\n/uploads/280x178_2_6598614535.jpeg\n/uploads/8bf194589919a057d7e55e6e0bc38735_0978fd8db5.jpeg\n/uploads/3a98ad3e71cfbedb0b2466370045316b_1_784d43f041.jpeg\n/uploads/Laurie_Anderson_Heart_of_a_Dog_3_c372653d1e.jpeg\n/uploads/maxresdefault_205d90151c.jpeg\n/uploads/zagruzhennoe_c6067b77eb.jpeg\n/uploads/Screen_Shot_2017_01_04_at_17_16_53_252ea5e2ed.png\n/uploads/maxresdefault_1_612cb16fc7.jpeg\n/uploads/maxresdefault_2_93b16a93b2.jpeg\n/uploads/zagruzhennoe_1_a1e063a238.jpeg\n/uploads/e36bad4f2265_ba51cc6359.jpeg\n/uploads/cairo_city_16051300_02_03_06_Still003_cabb6565ed.jpeg\n/uploads/maxresdefault_3_6405ad0751.jpeg\n/uploads/maxresdefault_4_ec1bd9b10e.jpeg\n/uploads/088af76dd77ab1a163a5383e7e7e7d54_99e2e11589.jpeg\n/uploads/a53ab962_077a_4070_ac84_c17147e8fb16_1_4e37b08263.jpeg\n/uploads/unnamed_359b8cf568.jpeg\n/uploads/FBD_5_B97_D_D7_D5_47_CE_8_BB_6_2_EB_7_F984930_B_cx0_cy4_cw0_w1080_h608_4389f95b4f.jpeg\n/uploads/280x178_2_c754a5b367.jpeg\n/uploads/upload_TASS_1208585_pic905_895x505_34010_8e95098253.jpeg\n/uploads/man_f_3d0de1e8ca.jpeg\n/uploads/zagruzhennoe_efde9fa49e.jpeg\n/uploads/p520_1230881_81aa5bbd41.jpeg\n/uploads/f7946f5351da49b8141e7a11123070cc_0bb6969ffa.jpeg\n/uploads/24fcf0b4ded34dbc8a6792d7fd39_44a7662e50.jpeg\n/uploads/43cfd54bcf44422999d5197f24db_b750bba458.jpeg\n/uploads/440796_ffb2d02a21.jpeg\n/uploads/zagruzhennoe_06c31828c6.jpeg\n/uploads/1062889_600_29c813e7bb.jpeg\n/uploads/f63d8e42d0fa44f184c69576f77a_19a34fb789.jpeg\n/uploads/600x380_29e69f9cf7.jpeg\n/uploads/sddefault_e815c40fed.jpeg\n/uploads/kinopoisk_ru_Stockholm_2_C_My_Love_3458597_125b341b3c.jpeg\n/uploads/maxresdefault_04027c182c.jpeg\n/uploads/0001_76c25905da.jpeg\n/uploads/challenge_6_2000x869_51ced1214b.jpeg\n/uploads/rem_koolhaas_in_venice_2014_image_tomas_koolhaas_c88566c140.jpeg\n/uploads/zagruzhennoe_1_2e377c1bed.jpeg\n/uploads/tetragrammaton_3032831_7345d2be9b.jpeg\n/uploads/mamleev_1_1200x630_80075a241e.jpeg\n/uploads/95182_c923d140df.png\n/uploads/280x178_2_f53364a363.jpeg\n/uploads/2_43_1009401e3b.jpeg\n/uploads/twothree_1_2000x869_b84e29b069.jpeg\n/uploads/a3365cbf4d37ce2be6377cb29240e015_e54f928a4a.jpeg\n/uploads/Trailer_Thumbnail_v2_f93b84bae3.jpeg\n/uploads/1005x558_20180611112745a84cdb6853_207389185c.jpeg\n/uploads/zagruzhennoe_0452298b2b.jpeg\n/uploads/zagruzhennoe_1_abf766fea9.jpeg\n/uploads/C1_Vu_Acsdz_MY_727ba0c04a.jpeg\n/uploads/zagruzhennoe_2_9d38eea933.jpeg\n/uploads/2_AQ_sbvju_Rqpu_UP_9m_BQ_y_IXF_usg1_Q_vjae_Avq_Eovvs_I1_M_81fb0dc307.jpeg\n/uploads/word1_f7db41ec2c.jpeg\n/uploads/d3662037577f2479bbe5d96f2ae17b77e85933c22e50f4be481bbd69d90e1a5f_fdc1f29e58.jpeg\n/uploads/zagruzhennoe_3_a42111e53f.jpeg\n/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg\n/uploads/0_b389b72805.jpeg\n/uploads/content_Mountain_Movie_201caecdbf.jpeg\n/uploads/unnamed_e16c34a51a.jpeg\n/uploads/drib_1_1200x630_61aeb78757.jpeg\n/uploads/280x178_2_622e3d04db.jpeg\n/uploads/zagruzhennoe_4_729e7917e3.jpeg\n/uploads/FDC_3i7d_Ce_Zc2_Mk_RGLKP_f_KURIFG_gyc_X5_P3g4_B0wx8c_E_52a0fa86d7.jpeg\n/uploads/zagruzhennoe_5_259295f4a9.jpeg",
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:01:43.016Z",
      "updated_at": "2020-12-02T21:01:43.016Z"
  }
},
{
  "id": 11,
  "nameRU": " Баллада о Дженезисе и Леди Джей",
  "nameEN": "The Ballad of Genesis and Lady Jaye",
  "director": "Мари Лозье",
  "country": "США, Германия, Великобритания, Нидерланды, Бельгия, Франция",
  "year": "2011",
  "duration": 65,
  "description": "Невероятная история любви Дженезиса Пи-Орриджа и его жены Леди Джей, вместе с ним игравшей в группе Psychic TV, — история, которая вряд ли сообщает что-то новое о природе индастриала, но определенно — о природе человека вообще и о природе Пи-Орриджа в частности. Нью-йоркская художница французского происхождения Мари Лозье задумала и начала снимать этот фильм семь лет тому назад — ходила в гости в их квартиру в Нью-Йорке, снимала Дженезиса, стоящего за плитой, и Джей с пучками петрушки и котом на шестнадцатимиллиметровую камеру, одевала их в дурацкие костюмы, ездила с Psychic TV в тур и следила за тем, как любовь заставляет человека отказаться от собственной личности, раствориться в другом человеке и стать одним целым с возлюбленным, используя метод сut-up Уилльяма Берроуза; когда Леди Джей умерла в 2007 году, Дженезис сделал ее татуировку почти во всю руку и до сих пор говорит «мы» вместо «я».",
  "trailerLink": "https://www.youtube.com/watch?v=d8BX2FDrogo",
  "created_at": "2020-12-02T21:06:17.722Z",
  "updated_at": "2020-12-02T21:06:17.722Z",
  "image": {
      "id": 11,
      "name": "ballad-of-genesis-and-lady-jaye",
      "alternativeText": "",
      "caption": "",
      "width": 650,
      "height": 300,
      "formats": {
          "thumbnail": {
              "hash": "thumbnail_ballad_of_genesis_and_lady_jaye_10c27afa96",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 245,
              "height": 113,
              "size": 9.42,
              "path": null,
              "url": "/uploads/thumbnail_ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg"
          },
          "small": {
              "hash": "small_ballad_of_genesis_and_lady_jaye_10c27afa96",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 500,
              "height": 231,
              "size": 29.37,
              "path": null,
              "url": "/uploads/small_ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg"
          }
      },
      "hash": "ballad_of_genesis_and_lady_jaye_10c27afa96",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 43.95,
      "url": "/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg",
      "previewUrl": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg\n/uploads/all_tommoros_parties_33a125248d.jpeg\n/uploads/blur_a43fcf463d.jpeg\n/uploads/zagruzhennoe_113f557116.jpeg\n/uploads/taqwacore2_2f487d2e74.jpeg\n/uploads/881707734_640_d6a3a43358.jpeg\n/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg\n/uploads/images_5bfcbf36e6.jpeg\n/uploads/zagruzhennoe_1_fd5faff237.jpeg\n/uploads/images_244e1fd56f.jpeg\n/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg\n/uploads/590x400_2eccd40a93.jpeg\n/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg\n/uploads/1_6a9e0669ca.jpeg\n/uploads/zagruzhennoe_cba9c9f900.jpeg\n/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg\n/uploads/280x178_2_f2eee77cae.jpeg\n/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg\n/uploads/Backyard_327_3_2151980c5c.jpeg\n/uploads/zagruzhennoe_2_5f87844408.jpeg\n/uploads/maxresdefault_505b3fa578.jpeg\n/uploads/b1_3385dd88fe.jpeg\n/uploads/9c3adee646635c6aa56a229dbe9b9779_original_8b382dc3ec.jpeg\n/uploads/740x457_2016090618140134690b5589_07f872345d.jpeg\n/uploads/667708311_1280x720_558f3de42b.jpeg\n/uploads/inni_13_fb13830e94.jpeg\n/uploads/AAACDZTO_o_OJ_yo_Sf_EXLJ_5_J1u_J_r7j_FNH_vrcn_OAU_a_UX_s_Ljl6t_DBSZ_7_YPUDVPA_i_Cs1_Cje_y_Hb9_M8zvf6_DX_n_Qtux_Qa_SD_r_I_ea7df93d26.jpeg\n/uploads/amma_lo_fi_739aeb0890.jpeg\n/uploads/750x485_28d08c49c4.jpeg\n/uploads/zagruzhennoe_53d33dc9df.jpeg\n/uploads/TEENAGE_3_600_3b1cce5358.jpeg\n/uploads/unnamed_aa708a91a1.jpeg\n/uploads/133633090dfcb40e8e87ecf6cb52c419_c534c1283c.jpeg\n/uploads/zagruzhennoe_1_38e987f181.jpeg\n/uploads/Shut_Up_Hits_poster_f5bb0d6e83.jpeg\n/uploads/Art_Cinema_Webslug_Mr_Baker_de10be970f.jpeg\n/uploads/embed_still_available_now_8e4038f1f6.jpeg\n/uploads/704543546_960_d6340bce70.jpeg\n/uploads/Oil_City_Confidential_676986530_large_652c54fa63.jpeg\n/uploads/5a8db56aa48049529df13a2d2ab0_be34c45c62.jpeg\n/uploads/zagruzhennoe_58e5329700.jpeg\n/uploads/zagruzhennoe_1_9994d6db60.jpeg\n/uploads/BM_uc_YK_d_P4jn9lp_QF_7_Ew8z8_micr_f849e20df3.jpeg\n/uploads/ORCHARD_888003020894_Full_Image_Gallery_Cover_en_US_1551076193509_UY_500_UX_667_RI_VX_n_Xh_LAZXKUVW_a_NQPF_j2_CR_q_Ehjv_ERHT_od_TTW_0a20f1d30d.jpeg\n/uploads/zagruzhennoe_2_17bcd9ceff.jpeg\n/uploads/zagruzhennoe_3_312a12853b.jpeg\n/uploads/750x485_a07b1b2585.jpeg\n/uploads/14e1f2912a2a169b11820e3163df6c69_a01189ce50.jpeg\n/uploads/unnamed_0256d7127c.jpeg\n/uploads/zagruzhennoe_7326b1cb5f.jpeg\n/uploads/15786_oldschool_renegades_docu_c54f63dfc1.jpeg\n/uploads/552242179_1280x720_66bc43b289.jpeg\n/uploads/Super_Duper_Alice_Cooper_2014_8b1641fbaf.jpeg\n/uploads/orig_bc3e53efa8.jpeg\n/uploads/zagruzhennoe_1_1817cd23a2.jpeg\n/uploads/zagruzhennoe_2_c709860078.jpeg\n/uploads/zagruzhennoe_3_08092046af.jpeg\n/uploads/images_0bbc035397.jpeg\n/uploads/77e84d33e7f526823bd23362c6e66261_a9c0fb3836.jpeg\n/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png\n/uploads/Snimok_ekrana_2020_12_03_v_16_00_28_a851176a2d.png\n/uploads/Werewolves_Across_America_3f48106062.jpeg\n/uploads/zagruzhennoe_edcf93eb96.jpeg\n/uploads/maxresdefault_88702f9bc0.jpeg\n/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg\n/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg\n/uploads/zagruzhennoe_1_3b8b337f95.jpeg\n/uploads/unnamed_0bd470956a.jpeg\n/uploads/705753536_1280x720_3f3ec9830f.jpeg\n/uploads/wyr_139_03_7a244dbd6e.jpeg\n/uploads/zagruzhennoe_b22b6e2887.jpeg\n/uploads/images_d789f0a61a.jpeg\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_913b905856.png\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_707fba4597.png\n/uploads/maxresdefault_21f787cdf3.jpeg\n/uploads/maxresdefault_1_0cda104e49.jpeg\n/uploads/maxresdefault_2_3072271808.jpeg\n/uploads/images_f324307a7f.jpeg\n/uploads/unnamed_4f99c0fa1e.jpeg\n/uploads/zagruzhennoe_a32e347316.jpeg\n/uploads/maxresdefault_164e1c974c.jpeg\n/uploads/b80915f7_d774_4536_9e79_450578a40ad4_9131a274_04cd1fb520.jpeg\n/uploads/12032_770x433_74026cdeb6.jpeg\n/uploads/zagruzhennoe_1_70b0c1a682.jpeg\n/uploads/maxresdefault_1_5bef2a2c64.jpeg\n/uploads/750x485_6aa18b04bb.jpeg\n/uploads/3_29_4b376917c9.jpeg\n/uploads/upload_9120ff30_fa73_11e5_b942_b366214b09de_ff4e9a16b9.jpeg\n/uploads/zagruzhennoe_2_946c91c6d8.jpeg\n/uploads/maxresdefault_2_4747cae75c.jpeg\n/uploads/den_unge_zlatan_aca9a6118e.jpeg\n/uploads/zagruzhennoe_3_6dab3dce0f.jpeg\n/uploads/zagruzhennoe_4_63633dbd00.jpeg\n/uploads/81c_6f_Ledf_L_RI_13c54761cc.jpeg\n/uploads/zagruzhennoe_8e5b14a44a.jpeg\n/uploads/zagruzhennoe_1_1aee5f7ecf.jpeg\n/uploads/mqdefault_14f34c8254.jpeg\n/uploads/zagruzhennoe_2_d22375c7cf.jpeg\n/uploads/zagruzhennoe_3_c78d64a9f0.jpeg\n/uploads/zagruzhennoe_4_43cd3f60e9.jpeg\n/uploads/big_davidandthespidersper011_2cef9d8735.jpeg\n/uploads/maxresdefault_c1369083db.jpeg\n/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg\n/uploads/d17ab991_15c3_47ca_b1fb_a26f934df98a_1_f2bebed5f8.jpeg\n/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg\n/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg\n/uploads/280x178_2_6598614535.jpeg\n/uploads/8bf194589919a057d7e55e6e0bc38735_0978fd8db5.jpeg\n/uploads/3a98ad3e71cfbedb0b2466370045316b_1_784d43f041.jpeg\n/uploads/Laurie_Anderson_Heart_of_a_Dog_3_c372653d1e.jpeg\n/uploads/maxresdefault_205d90151c.jpeg\n/uploads/zagruzhennoe_c6067b77eb.jpeg\n/uploads/Screen_Shot_2017_01_04_at_17_16_53_252ea5e2ed.png\n/uploads/maxresdefault_1_612cb16fc7.jpeg\n/uploads/maxresdefault_2_93b16a93b2.jpeg\n/uploads/zagruzhennoe_1_a1e063a238.jpeg\n/uploads/e36bad4f2265_ba51cc6359.jpeg\n/uploads/cairo_city_16051300_02_03_06_Still003_cabb6565ed.jpeg\n/uploads/maxresdefault_3_6405ad0751.jpeg\n/uploads/maxresdefault_4_ec1bd9b10e.jpeg\n/uploads/088af76dd77ab1a163a5383e7e7e7d54_99e2e11589.jpeg\n/uploads/a53ab962_077a_4070_ac84_c17147e8fb16_1_4e37b08263.jpeg\n/uploads/unnamed_359b8cf568.jpeg\n/uploads/FBD_5_B97_D_D7_D5_47_CE_8_BB_6_2_EB_7_F984930_B_cx0_cy4_cw0_w1080_h608_4389f95b4f.jpeg\n/uploads/280x178_2_c754a5b367.jpeg\n/uploads/upload_TASS_1208585_pic905_895x505_34010_8e95098253.jpeg\n/uploads/man_f_3d0de1e8ca.jpeg\n/uploads/zagruzhennoe_efde9fa49e.jpeg\n/uploads/p520_1230881_81aa5bbd41.jpeg\n/uploads/f7946f5351da49b8141e7a11123070cc_0bb6969ffa.jpeg\n/uploads/24fcf0b4ded34dbc8a6792d7fd39_44a7662e50.jpeg\n/uploads/43cfd54bcf44422999d5197f24db_b750bba458.jpeg\n/uploads/440796_ffb2d02a21.jpeg\n/uploads/zagruzhennoe_06c31828c6.jpeg\n/uploads/1062889_600_29c813e7bb.jpeg\n/uploads/f63d8e42d0fa44f184c69576f77a_19a34fb789.jpeg\n/uploads/600x380_29e69f9cf7.jpeg\n/uploads/sddefault_e815c40fed.jpeg\n/uploads/kinopoisk_ru_Stockholm_2_C_My_Love_3458597_125b341b3c.jpeg\n/uploads/maxresdefault_04027c182c.jpeg\n/uploads/0001_76c25905da.jpeg\n/uploads/challenge_6_2000x869_51ced1214b.jpeg\n/uploads/rem_koolhaas_in_venice_2014_image_tomas_koolhaas_c88566c140.jpeg\n/uploads/zagruzhennoe_1_2e377c1bed.jpeg\n/uploads/tetragrammaton_3032831_7345d2be9b.jpeg\n/uploads/mamleev_1_1200x630_80075a241e.jpeg\n/uploads/95182_c923d140df.png\n/uploads/280x178_2_f53364a363.jpeg\n/uploads/2_43_1009401e3b.jpeg\n/uploads/twothree_1_2000x869_b84e29b069.jpeg\n/uploads/a3365cbf4d37ce2be6377cb29240e015_e54f928a4a.jpeg\n/uploads/Trailer_Thumbnail_v2_f93b84bae3.jpeg\n/uploads/1005x558_20180611112745a84cdb6853_207389185c.jpeg\n/uploads/zagruzhennoe_0452298b2b.jpeg\n/uploads/zagruzhennoe_1_abf766fea9.jpeg\n/uploads/C1_Vu_Acsdz_MY_727ba0c04a.jpeg\n/uploads/zagruzhennoe_2_9d38eea933.jpeg\n/uploads/2_AQ_sbvju_Rqpu_UP_9m_BQ_y_IXF_usg1_Q_vjae_Avq_Eovvs_I1_M_81fb0dc307.jpeg\n/uploads/word1_f7db41ec2c.jpeg\n/uploads/d3662037577f2479bbe5d96f2ae17b77e85933c22e50f4be481bbd69d90e1a5f_fdc1f29e58.jpeg\n/uploads/zagruzhennoe_3_a42111e53f.jpeg\n/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg\n/uploads/0_b389b72805.jpeg\n/uploads/content_Mountain_Movie_201caecdbf.jpeg\n/uploads/unnamed_e16c34a51a.jpeg\n/uploads/drib_1_1200x630_61aeb78757.jpeg\n/uploads/280x178_2_622e3d04db.jpeg\n/uploads/zagruzhennoe_4_729e7917e3.jpeg\n/uploads/FDC_3i7d_Ce_Zc2_Mk_RGLKP_f_KURIFG_gyc_X5_P3g4_B0wx8c_E_52a0fa86d7.jpeg\n/uploads/zagruzhennoe_5_259295f4a9.jpeg",
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:03:33.524Z",
      "updated_at": "2020-12-02T21:03:33.524Z"
  }
},
{
  "id": 12,
  "nameRU": "Виллалобос",
  "nameEN": "Villalobos",
  "director": "Ромуальд Кармакар",
  "country": "Германия",
  "year": "2009",
  "duration": 110,
  "description": "Последний фильм трилогии, опус магнум Ромуальда Кармакара, премьера которого состоялась в основной программе Венецианского кинофестиваля. Рикардо Виллалобос предстает здесь не столько как один самых востребованных диджеев, сколько как визионер от мира современной музыки. Кармакар исследует не феномен популярности Виллалобоса, а то, как устроена его голова, что творится в его аппаратуре, когда он сводит один трек с другим, как рождается музыка и какое отношение тек-хаус имеет к Мусоргскому.",
  "trailerLink": "https://www.kinopoisk.ru/film/586534/video/56500/",
  "created_at": "2020-12-02T21:08:46.397Z",
  "updated_at": "2020-12-02T21:08:46.397Z",
  "image": {
      "id": 12,
      "name": "590x400",
      "alternativeText": "",
      "caption": "",
      "width": 590,
      "height": 400,
      "formats": {
          "thumbnail": {
              "hash": "thumbnail_590x400_2eccd40a93",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 230,
              "height": 156,
              "size": 5.11,
              "path": null,
              "url": "/uploads/thumbnail_590x400_2eccd40a93.jpeg"
          },
          "small": {
              "hash": "small_590x400_2eccd40a93",
              "ext": ".jpeg",
              "mime": "image/jpeg",
              "width": 500,
              "height": 339,
              "size": 16.78,
              "path": null,
              "url": "/uploads/small_590x400_2eccd40a93.jpeg"
          }
      },
      "hash": "590x400_2eccd40a93",
      "ext": ".jpeg",
      "mime": "image/jpeg",
      "size": 20.9,
      "url": "/uploads/590x400_2eccd40a93.jpeg",
      "previewUrl": "/uploads/stones_in_exile_b2f1b8f4b7.jpeg\n/uploads/all_tommoros_parties_33a125248d.jpeg\n/uploads/blur_a43fcf463d.jpeg\n/uploads/zagruzhennoe_113f557116.jpeg\n/uploads/taqwacore2_2f487d2e74.jpeg\n/uploads/881707734_640_d6a3a43358.jpeg\n/uploads/posters_came_from_the_walls_2009_001_posters_180fe1a19f.jpeg\n/uploads/images_5bfcbf36e6.jpeg\n/uploads/zagruzhennoe_1_fd5faff237.jpeg\n/uploads/images_244e1fd56f.jpeg\n/uploads/ballad_of_genesis_and_lady_jaye_10c27afa96.jpeg\n/uploads/590x400_2eccd40a93.jpeg\n/uploads/8647b36126befd6051c83ae66339d7f71ecbaa0d_752489df96.jpeg\n/uploads/1_6a9e0669ca.jpeg\n/uploads/zagruzhennoe_cba9c9f900.jpeg\n/uploads/b452eefcd7d441e79b2f5ae291b7_2c0c62fa89.jpeg\n/uploads/280x178_2_f2eee77cae.jpeg\n/uploads/zagruzhennoe_1_dc1a2c8f7d.jpeg\n/uploads/Backyard_327_3_2151980c5c.jpeg\n/uploads/zagruzhennoe_2_5f87844408.jpeg\n/uploads/maxresdefault_505b3fa578.jpeg\n/uploads/b1_3385dd88fe.jpeg\n/uploads/9c3adee646635c6aa56a229dbe9b9779_original_8b382dc3ec.jpeg\n/uploads/740x457_2016090618140134690b5589_07f872345d.jpeg\n/uploads/667708311_1280x720_558f3de42b.jpeg\n/uploads/inni_13_fb13830e94.jpeg\n/uploads/AAACDZTO_o_OJ_yo_Sf_EXLJ_5_J1u_J_r7j_FNH_vrcn_OAU_a_UX_s_Ljl6t_DBSZ_7_YPUDVPA_i_Cs1_Cje_y_Hb9_M8zvf6_DX_n_Qtux_Qa_SD_r_I_ea7df93d26.jpeg\n/uploads/amma_lo_fi_739aeb0890.jpeg\n/uploads/750x485_28d08c49c4.jpeg\n/uploads/zagruzhennoe_53d33dc9df.jpeg\n/uploads/TEENAGE_3_600_3b1cce5358.jpeg\n/uploads/unnamed_aa708a91a1.jpeg\n/uploads/133633090dfcb40e8e87ecf6cb52c419_c534c1283c.jpeg\n/uploads/zagruzhennoe_1_38e987f181.jpeg\n/uploads/Shut_Up_Hits_poster_f5bb0d6e83.jpeg\n/uploads/Art_Cinema_Webslug_Mr_Baker_de10be970f.jpeg\n/uploads/embed_still_available_now_8e4038f1f6.jpeg\n/uploads/704543546_960_d6340bce70.jpeg\n/uploads/Oil_City_Confidential_676986530_large_652c54fa63.jpeg\n/uploads/5a8db56aa48049529df13a2d2ab0_be34c45c62.jpeg\n/uploads/zagruzhennoe_58e5329700.jpeg\n/uploads/zagruzhennoe_1_9994d6db60.jpeg\n/uploads/BM_uc_YK_d_P4jn9lp_QF_7_Ew8z8_micr_f849e20df3.jpeg\n/uploads/ORCHARD_888003020894_Full_Image_Gallery_Cover_en_US_1551076193509_UY_500_UX_667_RI_VX_n_Xh_LAZXKUVW_a_NQPF_j2_CR_q_Ehjv_ERHT_od_TTW_0a20f1d30d.jpeg\n/uploads/zagruzhennoe_2_17bcd9ceff.jpeg\n/uploads/zagruzhennoe_3_312a12853b.jpeg\n/uploads/750x485_a07b1b2585.jpeg\n/uploads/14e1f2912a2a169b11820e3163df6c69_a01189ce50.jpeg\n/uploads/unnamed_0256d7127c.jpeg\n/uploads/zagruzhennoe_7326b1cb5f.jpeg\n/uploads/15786_oldschool_renegades_docu_c54f63dfc1.jpeg\n/uploads/552242179_1280x720_66bc43b289.jpeg\n/uploads/Super_Duper_Alice_Cooper_2014_8b1641fbaf.jpeg\n/uploads/orig_bc3e53efa8.jpeg\n/uploads/zagruzhennoe_1_1817cd23a2.jpeg\n/uploads/zagruzhennoe_2_c709860078.jpeg\n/uploads/zagruzhennoe_3_08092046af.jpeg\n/uploads/images_0bbc035397.jpeg\n/uploads/77e84d33e7f526823bd23362c6e66261_a9c0fb3836.jpeg\n/uploads/When_Bjoerk_Met_Attenborough_Title_Card_d6a713d2b4.png\n/uploads/Snimok_ekrana_2020_12_03_v_16_00_28_a851176a2d.png\n/uploads/Werewolves_Across_America_3f48106062.jpeg\n/uploads/zagruzhennoe_edcf93eb96.jpeg\n/uploads/maxresdefault_88702f9bc0.jpeg\n/uploads/full_Amanda_F_ing_Palmer_web_IMG_1015_cbc67aff4a.jpeg\n/uploads/a048f25d_cc42_4c2c_aa8d_5878118806d7_ffd3e73bf8.jpeg\n/uploads/zagruzhennoe_1_3b8b337f95.jpeg\n/uploads/unnamed_0bd470956a.jpeg\n/uploads/705753536_1280x720_3f3ec9830f.jpeg\n/uploads/wyr_139_03_7a244dbd6e.jpeg\n/uploads/zagruzhennoe_b22b6e2887.jpeg\n/uploads/images_d789f0a61a.jpeg\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_913b905856.png\n/uploads/Snimok_ekrana_2020_12_03_v_19_49_22_707fba4597.png\n/uploads/maxresdefault_21f787cdf3.jpeg\n/uploads/maxresdefault_1_0cda104e49.jpeg\n/uploads/maxresdefault_2_3072271808.jpeg\n/uploads/images_f324307a7f.jpeg\n/uploads/unnamed_4f99c0fa1e.jpeg\n/uploads/zagruzhennoe_a32e347316.jpeg\n/uploads/maxresdefault_164e1c974c.jpeg\n/uploads/b80915f7_d774_4536_9e79_450578a40ad4_9131a274_04cd1fb520.jpeg\n/uploads/12032_770x433_74026cdeb6.jpeg\n/uploads/zagruzhennoe_1_70b0c1a682.jpeg\n/uploads/maxresdefault_1_5bef2a2c64.jpeg\n/uploads/750x485_6aa18b04bb.jpeg\n/uploads/3_29_4b376917c9.jpeg\n/uploads/upload_9120ff30_fa73_11e5_b942_b366214b09de_ff4e9a16b9.jpeg\n/uploads/zagruzhennoe_2_946c91c6d8.jpeg\n/uploads/maxresdefault_2_4747cae75c.jpeg\n/uploads/den_unge_zlatan_aca9a6118e.jpeg\n/uploads/zagruzhennoe_3_6dab3dce0f.jpeg\n/uploads/zagruzhennoe_4_63633dbd00.jpeg\n/uploads/81c_6f_Ledf_L_RI_13c54761cc.jpeg\n/uploads/zagruzhennoe_8e5b14a44a.jpeg\n/uploads/zagruzhennoe_1_1aee5f7ecf.jpeg\n/uploads/mqdefault_14f34c8254.jpeg\n/uploads/zagruzhennoe_2_d22375c7cf.jpeg\n/uploads/zagruzhennoe_3_c78d64a9f0.jpeg\n/uploads/zagruzhennoe_4_43cd3f60e9.jpeg\n/uploads/big_davidandthespidersper011_2cef9d8735.jpeg\n/uploads/maxresdefault_c1369083db.jpeg\n/uploads/Cgl_Bhww_W0_AA_4e9z_47b25b54f2.jpeg\n/uploads/d17ab991_15c3_47ca_b1fb_a26f934df98a_1_f2bebed5f8.jpeg\n/uploads/a8d4cdd255634c0482b068837d05_828b189cbd.jpeg\n/uploads/e331957b9865491f8c99b10d6b09_d0ab426dc5.jpeg\n/uploads/280x178_2_6598614535.jpeg\n/uploads/8bf194589919a057d7e55e6e0bc38735_0978fd8db5.jpeg\n/uploads/3a98ad3e71cfbedb0b2466370045316b_1_784d43f041.jpeg\n/uploads/Laurie_Anderson_Heart_of_a_Dog_3_c372653d1e.jpeg\n/uploads/maxresdefault_205d90151c.jpeg\n/uploads/zagruzhennoe_c6067b77eb.jpeg\n/uploads/Screen_Shot_2017_01_04_at_17_16_53_252ea5e2ed.png\n/uploads/maxresdefault_1_612cb16fc7.jpeg\n/uploads/maxresdefault_2_93b16a93b2.jpeg\n/uploads/zagruzhennoe_1_a1e063a238.jpeg\n/uploads/e36bad4f2265_ba51cc6359.jpeg\n/uploads/cairo_city_16051300_02_03_06_Still003_cabb6565ed.jpeg\n/uploads/maxresdefault_3_6405ad0751.jpeg\n/uploads/maxresdefault_4_ec1bd9b10e.jpeg\n/uploads/088af76dd77ab1a163a5383e7e7e7d54_99e2e11589.jpeg\n/uploads/a53ab962_077a_4070_ac84_c17147e8fb16_1_4e37b08263.jpeg\n/uploads/unnamed_359b8cf568.jpeg\n/uploads/FBD_5_B97_D_D7_D5_47_CE_8_BB_6_2_EB_7_F984930_B_cx0_cy4_cw0_w1080_h608_4389f95b4f.jpeg\n/uploads/280x178_2_c754a5b367.jpeg\n/uploads/upload_TASS_1208585_pic905_895x505_34010_8e95098253.jpeg\n/uploads/man_f_3d0de1e8ca.jpeg\n/uploads/zagruzhennoe_efde9fa49e.jpeg\n/uploads/p520_1230881_81aa5bbd41.jpeg\n/uploads/f7946f5351da49b8141e7a11123070cc_0bb6969ffa.jpeg\n/uploads/24fcf0b4ded34dbc8a6792d7fd39_44a7662e50.jpeg\n/uploads/43cfd54bcf44422999d5197f24db_b750bba458.jpeg\n/uploads/440796_ffb2d02a21.jpeg\n/uploads/zagruzhennoe_06c31828c6.jpeg\n/uploads/1062889_600_29c813e7bb.jpeg\n/uploads/f63d8e42d0fa44f184c69576f77a_19a34fb789.jpeg\n/uploads/600x380_29e69f9cf7.jpeg\n/uploads/sddefault_e815c40fed.jpeg\n/uploads/kinopoisk_ru_Stockholm_2_C_My_Love_3458597_125b341b3c.jpeg\n/uploads/maxresdefault_04027c182c.jpeg\n/uploads/0001_76c25905da.jpeg\n/uploads/challenge_6_2000x869_51ced1214b.jpeg\n/uploads/rem_koolhaas_in_venice_2014_image_tomas_koolhaas_c88566c140.jpeg\n/uploads/zagruzhennoe_1_2e377c1bed.jpeg\n/uploads/tetragrammaton_3032831_7345d2be9b.jpeg\n/uploads/mamleev_1_1200x630_80075a241e.jpeg\n/uploads/95182_c923d140df.png\n/uploads/280x178_2_f53364a363.jpeg\n/uploads/2_43_1009401e3b.jpeg\n/uploads/twothree_1_2000x869_b84e29b069.jpeg\n/uploads/a3365cbf4d37ce2be6377cb29240e015_e54f928a4a.jpeg\n/uploads/Trailer_Thumbnail_v2_f93b84bae3.jpeg\n/uploads/1005x558_20180611112745a84cdb6853_207389185c.jpeg\n/uploads/zagruzhennoe_0452298b2b.jpeg\n/uploads/zagruzhennoe_1_abf766fea9.jpeg\n/uploads/C1_Vu_Acsdz_MY_727ba0c04a.jpeg\n/uploads/zagruzhennoe_2_9d38eea933.jpeg\n/uploads/2_AQ_sbvju_Rqpu_UP_9m_BQ_y_IXF_usg1_Q_vjae_Avq_Eovvs_I1_M_81fb0dc307.jpeg\n/uploads/word1_f7db41ec2c.jpeg\n/uploads/d3662037577f2479bbe5d96f2ae17b77e85933c22e50f4be481bbd69d90e1a5f_fdc1f29e58.jpeg\n/uploads/zagruzhennoe_3_a42111e53f.jpeg\n/uploads/QEM_4_DW_j7a0_Q_1f5f7d6a2e.jpeg\n/uploads/0_b389b72805.jpeg\n/uploads/content_Mountain_Movie_201caecdbf.jpeg\n/uploads/unnamed_e16c34a51a.jpeg\n/uploads/drib_1_1200x630_61aeb78757.jpeg\n/uploads/280x178_2_622e3d04db.jpeg\n/uploads/zagruzhennoe_4_729e7917e3.jpeg\n/uploads/FDC_3i7d_Ce_Zc2_Mk_RGLKP_f_KURIFG_gyc_X5_P3g4_B0wx8c_E_52a0fa86d7.jpeg\n/uploads/zagruzhennoe_5_259295f4a9.jpeg",
      "provider": "local",
      "provider_metadata": null,
      "created_at": "2020-12-02T21:08:31.457Z",
      "updated_at": "2020-12-02T21:08:31.457Z"
  }
}
]
