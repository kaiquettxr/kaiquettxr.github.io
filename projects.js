/* =====================================================================
   PROJECTS DATA
   =====================================================================
   This is the ONLY file you need to edit to add photos/videos.
   Both the homepage (index.html) and the project pages (project.html)
   read from this file automatically.

   All images/videos below were pulled directly from your live
   myportfolio.com site, so this file already reflects your real work.

   HOW TO ADD MORE PHOTOS TO A PROJECT:
   1. Find the project below by its "slug".
   2. Add image links inside the "images" array, one per line.
   3. Paste a full web link to a photo (e.g. an already-hosted image URL).

   HOW TO ADD/CHANGE VIDEOS:
   - "videos" is a list — add or remove embed links inside the [ ] brackets.
   - Leave it as [] (empty) if there's no video for that project.
   - Every video from your live site is included here (e.g. Elenko Sports
     has all 10, Isaac Amendoim has all 4).

   CATEGORY must be exactly one of: "sports", "brand", "music", "events"
   ===================================================================== */

const PROJECTS = [

  // ---------- FEATURED ----------
  {
    slug: "adidas",
    name: "Adidas",
    category: "brand",
    year: "2026",
    role: "Content Production & Photography",
    blurb: "Produced campaign photography and video content for Adidas, translating brand direction into on-the-ground execution — from shot planning through to final delivery.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6257d291-26b9-4fe7-9906-3b54c2dafa3c_car_3x4.JPG?h=baea616011c4ba650e06fccca3947e14",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/56d24d60-9e63-42d0-9a34-9dd51b62cfba_rw_1920.JPG?h=ed3048a647b2c3ef3bc6c85127c5a31c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/20c292d2-159d-4ec2-91b1-6451b8b07f1c_rw_1920.JPG?h=debb6bd8f31877d625b13d08ec332fb9",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a996b6b9-c4df-49ff-8ffd-243268096d61_rw_1920.JPG?h=c3e2fadd6bca18dcc8838cd2fcd4f77a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d29fa12f-69d3-49f7-be6f-e74856d9d465_rw_1920.JPG?h=6c474aeb19f5d7d0992b66ca7c55ee6b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7bac09f1-bbb0-4b6c-b674-deb9d4d3dace_rw_1920.JPG?h=a75b2de27440627296d32349c9c559d4",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6cb5877c-ba13-4cdd-9b89-9e382a63fcef_rw_1920.JPG?h=c2e12db8e3c3b9f15f7e665face67844"
    ],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/N_fjweZXBGp/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },
  {
    slug: "nba-finals",
    name: "NBA School Finals",
    category: "sports",
    year: "2026",
    role: "Official Photographer",
    blurb: "Official photographer for the NBA School Finals, one of Brazil's largest youth basketball events — covering game action and behind-the-scenes moments with same-day turnaround for digital publishing.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7b530d53-9cda-4871-8f51-a92a0969799a_rwc_0x314x3840x5114x3840.jpg?h=79f7f4d535f59d0b728059d58fe56d8f",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/40de9bb0-84d2-42fa-819f-dbdd88d4e5c5_rw_1920.jpg?h=c1a5ed52289c0db026b3c6a075e64636",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/fb3393c9-7594-4d6a-bac6-0b99a911ec1c_rw_1920.jpg?h=e9e6e8df7ad019b9bc858f05fd71f8c2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/498afbb7-f6dd-4177-9c6b-7251cb366962_rw_3840.jpg?h=7bffab3c598aa34e1a157ea6a0d97ec6",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/abb879b7-ba8a-4922-b771-e9824e539499_rw_1920.jpg?h=7b4dcb995cb00c0ecb80355321bd3cda",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/44489fc7-2df7-466d-9c1b-b28e8a336935_rw_3840.jpg?h=5659cdad7c7a18d4afe0a12fb295c15c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f31cb4ea-c36c-4f0e-a6a1-48fad1481969_rw_3840.jpg?h=a9a87841a4d71bb62b44ac1757def22f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9d8bad55-faa3-4dde-9ac0-5b5d22013cf5_rw_3840.jpg?h=b88b1063450f9eb9f33ea0dc44c60b93",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c49ab9a5-4ae4-4a40-9341-7a3f62d6647b_rw_1920.jpg?h=902cf5ed8dc59d4e7f8464e7d8229b64",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/dd40627e-d0f5-44ff-b415-959c54058d18_rw_3840.jpg?h=0afd2488eb6a118e1383c3801565c9bd",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/92e2e2f1-49e6-4043-970d-17322f148975_rw_3840.jpg?h=ef46b9c03429f216d5e3102a9900e6aa",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ecad9711-d938-4f96-9408-ef2fbeb07049_rw_3840.jpg?h=3b7f924ddd6cc453f1933cf172079c7f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b328e48b-5017-4a0b-90fd-490c7c4477ee_rw_3840.jpg?h=360dda76f29ee79667dbc67d952984b5",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/fab0b9ae-25b8-4c8a-9107-0c15dca8af7f_rw_1920.jpg?h=ce1bfed3bc7138b5e95c6c944fcae778",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c4f12912-0f57-427b-b84a-1d93ac447985_rw_3840.JPG?h=b0e1dd3d46baf0bbb437a79ff62238dd",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6da227fd-2237-419a-a7b1-91284639658a_rw_3840.jpg?h=141116e0c8859a6ff21d6f80acdc8faa",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a79ded92-f935-4bb2-9c92-f99a03e94863_rw_3840.jpg?h=71d7b4d774050d540c841004cca97aba",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/bfd536a9-27e0-4acf-9465-a49c31567461_rw_1920.JPG?h=8a14b37010b057ce43de2a0d8386e62f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a3df7a3c-f47c-4cb9-84a3-d96a6bb13db9_rw_3840.jpg?h=c8a4161e4be2e85e5d5686e5590f0261",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a01f0700-34b7-45f8-9690-9bffba777827_rw_1920.JPG?h=3c6c27517b13f7bf4805e149fdb9256c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7fa554a2-d63e-4843-b1a1-6f5ee3e018be_rw_1920.jpg?h=4e7c31f07c43f283572fc4a4afee98bf",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5375c30a-b3f6-4fb6-acfd-d24fd3469dfa_rw_3840.JPG?h=7485c94a3b563d4823d91e5592b5639d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/95fb2ad1-de47-4722-93f3-17442eb64046_rw_1920.JPG?h=de78d7fe1a99021a7d052e491920ae82",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2ed192a6-50c5-47c7-a581-03a9f14a645b_rw_1920.jpg?h=e75a9938359f55ae0ff7f2f863cffc30",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9df4c595-d633-457d-8a86-5b050acaa3ab_rw_1920.JPG?h=d0592e6f51960d85e9c71dafa0c315ec",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9b6418c9-149e-4b47-aae8-ddcae48434c7_rw_3840.jpg?h=61b0ee9875ce195235f08e3c6717319d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/be74e0f1-844c-43a4-bc09-a769cf17bf0c_rw_1920.JPG?h=cdb4d842e178d1f060f1ad2e1737ebf2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4f3acf87-32e9-47b4-8403-8ef6ff832f12_rw_3840.jpg?h=1ed57aec0660cab38ea47af5d9fe4c7d"
    ],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/NeGTHzRpaVF/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },
  {
    slug: "roberto-carlos",
    name: "Roberto Carlos",
    category: "music",
    year: "2026",
    role: "Content Production",
    blurb: "Produced photography and video content around Roberto Carlos performances, delivering stage-ready stills alongside short-form video for the artist's digital channels.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9e16cf51-c17d-4ede-91c1-cf43bd5924dc_rwc_0x192x1920x2557x1920.jpg?h=8e01e849ce72ceaaeadfc300bd9960d6",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/05e5a6b9-b3a8-483d-a8aa-dc0e3849ed47_rw_3840.jpg?h=79b215ee014a577b748d4abd85bbc5da",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/be009ba8-930f-47f5-8d65-31f6990db2b5_rw_3840.jpg?h=56840c65364adab8f777f06a87d4e10d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b3c04e79-b96c-4889-bc7e-3564f18bd7f4_rw_3840.jpg?h=0a5e16712508433967cc30d73d3a63ea",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9168ee23-5e12-45e5-beac-90a489812f8c_rw_3840.jpg?h=90897ead01dd152228803813e6d1421a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/cc6a2071-c2ae-484c-bead-fa6ccfa26515_rw_1920.jpg?h=a33356b619243a2ed6a4a2d49e351470",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5a566dbb-767a-40fb-b82a-9155d3334266_rw_3840.jpg?h=e611b19afe065c9ef02f5e152ac7a56b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7f603c32-0f8b-428f-a520-46f5258255e6_rw_3840.jpg?h=66ac0cd7a3865811af57fbd9b3b1659d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d3dcfde0-5610-40a9-a558-381893bbbada_rw_3840.jpg?h=168709f9bf0991f0d6092ca4a097f7c1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/89d0ab7f-866c-4016-9933-230e7c3fd744_rw_3840.jpg?h=6df5eddda1764abd81f4839fdb51b067",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d44e32d1-53f7-4538-840d-46a1501d6167_rw_3840.jpg?h=fe7baea8f2ed4b54f504dcd3f0c2fd6f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/323f37f5-17ca-4ff2-a390-61f011e8829f_rw_3840.jpg?h=7a9bb1ef0e5fcab4218eb33754e821a1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/563a04fc-4a2b-4c8e-8ce7-f1ba8408261a_rw_3840.jpg?h=e5564834f6dcd0f913edb4b6090acbf3",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e245f240-dd57-4ec7-8a01-a6c3f5de6bb6_rw_1920.jpg?h=d316f27547035515dde7e02802092ced",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a92039d6-862f-4c9b-ad9c-8e04582d5e85_rw_1920.jpg?h=094cf91cf6eb443d47b1d1d5bc56b7ee",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b04e114a-149e-4a68-91be-cafd6bb02f1b_rw_3840.jpg?h=5beccfadad169a4a1c9cddf8f322828d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/cd5df3e6-8642-4fae-9df7-7898a07e4425_rw_3840.jpg?h=eceb6ca00b3c73370f63faf38b05b8c1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/55d98eb1-84fc-49ed-8930-4dc426e255c0_rw_1920.jpg?h=460d0d288cd8a4103d899055d9cd14ee",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/afa2ca62-00ed-44d3-84e6-a5ea6d1593c6_rw_3840.jpg?h=9619138d4bcd0844dc528f27f1a7a18a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ba51cf39-d389-4abb-b4d8-be18bbae8190_rw_3840.jpg?h=bb6176701b74a64f22546c415271cd50"
    ],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/P5uCvMm6CS8/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  // ---------- SPORTS ----------
  {
    slug: "edenilson-botafogo",
    name: "Edenilson | Botafogo",
    category: "sports",
    year: "2026",
    role: "Photography & Video — Solo Coverage",
    blurb: "Solo-covered Edenilson's official presentation at Botafogo, handling both photography and video single-handedly from press conference to first training session, with same-day delivery for the club's channels.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0a1bb9ca-f628-4198-b81b-adbe73ce936c_rwc_0x314x3840x5114x3840.jpg?h=5d2e92510eae42708675fc664a098ab6",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e7d06f6b-5464-4ffe-87e0-cc30b1aed515_rw_3840.jpg?h=847451268cee525d474f89930f0a721e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/65b75128-d348-472e-a817-90c50ea8ab12_rw_3840.jpg?h=39a373c296ba3524075066533e3bce52",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/bf13ddd7-99e1-4b47-b1e6-d31e046bf81a_rw_3840.jpg?h=4fd1b32b622f111e7ec37fcf79546f2a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/725e95f3-1e16-4058-9d62-566bd4b84a67_rw_1920.jpg?h=9a2e53658f5fc3db173ef2e7c5880be0",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/06e2fb29-8080-4066-90f4-9485836db0af_rw_3840.jpg?h=aeadb28e8bffaa680c808523da1950a9",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/628913de-2b28-4f82-8364-30c5a2c46a30_rw_3840.jpg?h=a6c1140560aa3f5e1e1ff8d6ec2303fa",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f374a4c3-e825-4f69-bfe4-a0e2b6dc2f2c_rw_3840.jpg?h=36c58739fdc82d204b66622fca7d8104",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/827eab25-042c-4b5b-abe3-7c2d1f4969db_rw_1920.jpg?h=27dd31e5ac360090c58d5acec940ed2f"
    ],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/IYDPhqckwQf/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  {
    slug: "vasco-x-corinthians-futsal",
    name: "Vasco x Corinthians Futsal",
    category: "sports",
    year: "2026",
    role: "Player-Commissioned Match Coverage",
    blurb: "Covered this futsal match on assignment for players from both Vasco and Corinthians, delivering game-action photography for their personal and sponsor channels.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/78a7ac15-7696-4c74-b4e2-3fd6a73c0229_rwc_0x593x3840x5114x3840.jpg?h=63700fe2af3c8dbc5966761785d136ee",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d7601dd5-c605-4601-8de1-4c88f84e1e7a_rw_1920.jpg?h=75499e942916649a2824ec8fc268976c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/821805fd-000f-4ebd-8556-132a8f4d9f15_rw_1920.jpg?h=6b4181740a4fbcf1288087bc6b74fb21",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f3ae5b54-0d32-463a-a939-a3e5456a6b9c_rw_1920.jpg?h=fc26daeba77e1c44e922f9abb047f9dd",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/76c3b89f-6167-4fde-abb5-44084a1c98f8_rw_3840.jpg?h=14dfdb0bf60014286d6cbfee54191051",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/dd878d7b-2d16-4e13-a285-5b7612242282_rw_3840.jpg?h=61a71faab05778ebbfaa6ab5d404e713",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/bf7632cc-c4c0-4c65-bda2-d1a04cd0bd67_rw_3840.jpg?h=d11d9038237df0738387fe6e7308ce28",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2b6102a3-b1bb-49ea-a852-fadff0b451f8_rw_3840.jpg?h=3c02d223093467f5db1a855084cf3a33",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/93ef56a5-2d90-45c0-a072-08f8ac88477c_rw_3840.jpg?h=6f7f39cd7f08b5f9a84b638adfee0a98",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a74522be-b280-4e7a-8bf6-99b87e6a7b42_rw_3840.jpg?h=491f462c0431af8fe777c5af07b5f64e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1fd53427-4d03-4c6f-bb0c-3f8c56ed489d_rw_1920.jpg?h=1a83ccf41233d0e2aa76c69876dd032b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/be7228af-7dee-4f83-8d3e-125a153597c1_rw_1920.jpg?h=65ad15eabe16c6813020f36bd75a0dda",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6ea38515-004d-460f-bacf-72b4f9c99db9_rw_3840.jpg?h=6d16fc9d8e637314d26284e28b539998",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/970a2da2-6503-4242-a488-a119cc6a037e_rw_3840.jpg?h=c2d6d4433dd67dc23dbc7d2852c6e28c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e9dc2405-32fb-49ff-95ed-b0621284a7cf_rw_3840.jpg?h=8dfb7d3309c6640c15681ed5291f2e23",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/cf128312-769d-4018-bdc8-c71e1cc44ab6_rw_3840.jpg?h=c3e8b4c72a4085c94c0e557f107fa834",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c27282d4-389f-4868-bd6c-6a4c12a16652_rw_1920.jpg?h=d94d1d871a5ea1b2ee505d3b4597647e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/953d61fd-2530-452a-942e-13bb47ef82cc_rw_1920.jpg?h=a4fe81e11ed2b0125e54e2bf1e408049",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b38fe04d-9de7-43df-b8fa-51171465af5b_rw_3840.jpg?h=e8dff72ae875b4419c32442aa7a85ad4",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/44062188-12b1-467a-b5bd-e96b21f661d0_rw_3840.jpg?h=51f92301128ee1604f2eb048bad70f53",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/426c8c5f-f863-49c2-a242-70d6a98e187f_rw_1920.jpg?h=cf250fa04d1fca5c4fc77f562fdbc4e1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/aaee48ff-943c-4c1d-9701-a0a80903cfaf_rw_1920.jpg?h=bb54c0ead0ec3fa3223894f9495f7bec",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/8677ad61-d6d0-458f-92ff-1523a5b1c50c_rw_3840.jpg?h=52800b89afa3097fa9877ae2b629be01",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/cb393ff2-4058-4778-a940-213139653323_rw_3840.jpg?h=194b5d7d32d46ab657d621cde87b5b47",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/bca93387-9b70-42eb-af46-2807f99bfdfd_rw_3840.jpg?h=74bc435672471599d5f10fc7161ce8cc",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/232c0397-9b94-4519-bebe-0f1dd043f01e_rw_3840.jpg?h=51956eb832be5e68819bbe83be7cfb9b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4d89807f-1c1f-4ee4-b43a-45084b0815de_rw_3840.jpg?h=d9f0efc64bb66d04b1ec24093aeb5e21",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ab20c37f-0bb0-4558-8fd5-3f6c9c44162e_rw_3840.jpg?h=c3a601d594f68ab114a4c7865522b6e2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f636ab3c-69b0-45d9-b49b-c7fe18dfe1d5_rw_3840.jpg?h=7881bf3c1990ecef3b0f74b4b881d112"
    ],
    videos: []
  },

  {
    slug: "vasco-x-minas-futsal",
    name: "Vasco x Minas Futsal",
    category: "sports",
    year: "2026",
    role: "Player-Commissioned Match Coverage",
    blurb: "Covered this futsal match on assignment for players from both Vasco and Minas, delivering game-action photography for their personal and sponsor channels.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/144d1ae7-bbb1-43cb-a4da-39ba7e271c7a_rw_3840.jpg?h=e2155a76a5869af404b864c35dc355d7",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/85c12908-a4b6-4890-bbfe-0372db65bc2c_rw_3840.jpg?h=82f3b8581c598479faad8d7b9a3feffd",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/03ded59f-11d2-4f2a-a472-a692cc780f53_rw_3840.jpg?h=92c9bf343038dc33020b62cac81198a0",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b4365d9f-bd47-45a6-83f8-bced46416fd8_rw_3840.jpg?h=a262b2bb2bcc92a4246c49ac25f5d3d3",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/698df5ed-0383-4a9d-9bcf-d131e06d877a_rw_1920.jpg?h=3ffe239ec8f6fde0a5171be40cc57465",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f917917f-2030-4c47-b2f1-e0e6a28130cc_rw_3840.jpg?h=871ef88d90d4208881410ed50d8ac326",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/eca6ea77-8d85-4b1e-8a8c-40eab3799f50_rw_3840.jpg?h=b8b7cb14444c97d74ad908adfabacd41",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c804c1e5-1024-4495-a3f3-23c07badedda_rw_3840.jpg?h=6959868a34d8849026dfac5600ccba35",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c20b0c6b-c3e4-4c43-9d24-75bc56538e01_rw_3840.jpg?h=91ba8e2635db3cbbdaa1cc49a93f8536",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/055b12a1-4ac7-417c-b393-ccced90dd27b_rw_3840.jpg?h=a9a473b4937ec231719e7d71c29f8d25",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e713979e-2a9e-44ef-8f83-a0967e3f446b_rw_1920.jpg?h=0473ef7b8980d13a0ebc2cb01877bd13",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c416341e-87b8-48ed-ba2c-0e149232192f_rw_3840.jpg?h=bbe1b1031fb1b004db0aa15daba956b5",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1aeac400-4027-44c2-b9b3-d04b085de6b6_rw_3840.jpg?h=f6baeb79ce3084314916e1507cbe6715",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/767032e8-1c10-469f-8bef-b573a33bfe1d_rw_3840.jpg?h=94f98824c419e98b4f695cc810b2959e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ec340f3e-e065-4d44-b95a-0c3527e50356_rw_3840.jpg?h=458622c48544a64c1aee9a4bdb0b6fe9",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c2e881c4-496c-4885-9f25-ae7631295a84_rw_1920.jpg?h=aa29e773c94b38ec9e2754bb2333ce55",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f4285f7b-161f-40c3-8609-40fe57a46243_rw_1920.jpg?h=a945f8548035156edf3ec9f9ecf408eb",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d8fbc1ff-e2b8-4063-8181-503390ed737a_rw_3840.jpg?h=dd71d5dd95d3c5b4731e435ee59e571b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9a7e5291-9bf3-4484-927c-a5635ff57349_rw_3840.jpg?h=2d71c6763d16f0f9b46cca984548af36",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6b871ef6-221c-4ed7-9fce-96b32e148574_rw_3840.jpg?h=219c957a40e6a0ce5f81631ae603c2a3",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/aaaee94b-7bc1-46c0-9e72-8821f28583c0_rw_1920.jpg?h=d1d0d029ab03ea3c998fb5ee8829c508",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b04394c6-fbb0-4d52-a177-78573b4efe71_rw_3840.jpg?h=2eaf8ad8338daaf08821d1cb66262a1c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/18d7387e-61b5-4955-be9e-7243661c01a3_rw_1920.jpg?h=3b52dc81495c9af6397f00df085d80a7",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b20aeee9-a64b-44c4-bedd-713968e128af_rw_3840.jpg?h=01478c8840fe0f308b7e8def65c408f0",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/47074347-2a93-4385-a67e-cdfb3a581257_rw_3840.jpg?h=7c2be21a82f8115a88dbe6a98dc1ea2b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2e41295f-6d78-4812-a6e6-d7e6bfba4570_rw_3840.jpg?h=73fe685dca953ef08f9c5722e85b306a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/da0d11ea-a3c0-4636-8385-a578514e9aad_rw_1920.jpg?h=bb5e02d0fbc53c9bcfcb88c3fd7deab1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5633e752-887f-4fde-9a64-e5e6bbe4cd09_rw_3840.jpg?h=20e545977b7633f767cf5157d3f8fda0"
    ],
    videos: []
  },

  {
    slug: "elenko-sports",
    name: "Elenko Sports",
    category: "sports",
    year: "2026",
    role: "Video Content Producer",
    blurb: "Ongoing video content producer for Elenko Sports, one of the world's leading footballer career-management agencies, representing 100+ players — producing athlete and brand content for their roster.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/bd7dc172-f2f3-4ed7-958e-32ff01836eea_rwc_0x248x1165x1551x1165.jpg?h=179ef77de954bf7a61f2762064d0d30c",
    images: [],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/ScKQGL5HSPX/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/UQUMAajmGZJ/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/EKGEwxvZZNG/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/CPN6LC6oSFB/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/3hSBx7J6qKx/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/FYXIInY4MKU/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/CAykmvYdQHj/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/7xDtURzQH6h/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/Pzt67qz3sCd/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/2dYpWZoYubU/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  {
    slug: "campeonato-brasileiro-de-karate",
    name: "Campeonato Brasileiro de Karatê",
    category: "sports",
    year: "2026",
    role: "Official Photographer",
    blurb: "Official photographer for the Campeonato Brasileiro de Karatê, covering competition action across the tournament for organizers and athletes.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/898aa8a3-5cf9-4057-babb-21e2af09bd45_rw_1920.jpg?h=c0dfd673162cb0f6905ca8ee4952a524",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/23a5083d-c69d-46cd-9048-378bd91c5c24_rw_1920.jpg?h=6690892b83c4752e3e26073c3a066df2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/91de90b3-46d6-41af-b218-fd2f8a574c1d_rw_3840.jpg?h=4ccf6afc4da37c2b55494c1c1840a56c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/699d4c70-8828-4970-b5a3-2e22a019001b_rw_1920.jpg?h=1ba6d11a3348c95608f916fd560d9577",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/83c06dc6-0407-458c-980d-9818b8cda2b7_rw_1920.jpg?h=031065de4f4954e732886f0a81b6c076",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/78e9c230-f74b-4d96-9c09-29a7332b8f23_rw_1920.jpg?h=0d24629714fe86023cd8677614baa6a9",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2241d02f-3e96-4942-8680-d008958a9c9c_rw_1920.jpg?h=2e6abf4c7ff25c52b665dc05dfc2116f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/8edb5889-0c18-483b-814a-ac6fcf3fcc44_rw_1920.jpg?h=5871d74a7e48f09ad315c8b446e22a4f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/152b9ce3-04e5-4c33-a84a-e18a82a5b9bf_rw_1920.jpg?h=7c4c294e33d8ba8c9a478e7b7655148f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/159ff48d-10ae-4792-9c28-6873b19eb33c_rw_3840.jpg?h=17adf0e76b1754a3a8bc3eaa25dbdc57",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/dbbd7d1b-1226-4da8-b6ae-ac5c3323d2dd_rw_1920.jpg?h=7dbeee0c87e60d3f2f425491d4dde86c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/88934c97-e8e1-48ef-9373-4d6e91228555_rw_1920.jpg?h=812fb6f00a57fc2756bdefde010af289",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/764ab637-8f59-4e59-b549-5f48011b0a11_rw_1920.jpg?h=85d4f3c6a994d6a75a4021af085e4253",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/bbe39860-c276-4351-8eeb-aee00d6a3ff7_rw_1920.jpg?h=7083425a3886ba1a4205dec9606cab1a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/85ae6f2e-8028-458a-bea1-8a0c7067179a_rw_3840.jpg?h=34d01df2a2b304fec7ca1bb5768efaa2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/63ca250d-870f-4b20-9079-f4719257e54d_rw_1920.jpg?h=adc9e399a752c0ca56165bbae24e1263",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d65f1224-8d3e-4c10-af60-ff3a82d6cf2d_rw_3840.jpg?h=44b8fcc45e8ff1e8093774a6ab27f468",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2d685441-15d7-405e-a770-229d280e6665_rw_3840.jpg?h=06802e391791d70db2a4830dcb720063",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/295f4e40-55b0-4510-8120-dc864f0710b4_rw_1920.jpg?h=d50dbde42268662473e5dd74bf82d919",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/af075b39-bb01-43a7-820d-2fda189741e6_rw_3840.jpg?h=281a7f24f23098167ad90a61c1bf2591",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ad291032-1fe7-40ff-b52b-59034a39e7af_rw_1920.jpg?h=bb89a17246aa39a8ab5653e2752d2c7c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/21b0d447-9300-4158-9163-8f0bb9b74c30_rw_1920.jpg?h=23279165c1f07d7927b6942fd0f95919",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/777a9edc-6781-41f3-adbc-b8e8542064b8_rw_1920.jpg?h=98a4705644ac42a4f13726ea5becb00a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2f2de158-1263-427f-994d-9d0dcaea2cd9_rw_3840.jpg?h=5b2e4d55ef47326b20b4a5484a5df606",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/909e1f5f-5b93-44b0-a62b-4e442a79bb7f_rw_1920.jpg?h=027fc504433d9eedbd7b2652c291cf76",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/179601dd-31a8-4a30-9746-3e4212ec2896_rw_1920.jpg?h=048ef966d2ca06653b72849d7c29c969",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/16c3ee69-4cad-47e7-b02c-58727ae1cb29_rw_1920.jpg?h=534fc2cee82d789e4d9b66c6c9fec045",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b6cf5d11-3cfc-4e10-bb1b-49974f9ead94_rw_1920.jpg?h=804670c6d3b421318c12a9b72327bb34"
    ],
    videos: []
  },

  {
    slug: "isaac-amendoim-ad",
    name: "Isaac Amendoim — AD",
    category: "brand",
    year: "2026",
    role: "Content Producer — Full-Year Partnership",
    blurb: "Produced advertising and YouTube content for Isaac Amendoim across a full year based in Rio de Janeiro — from market-facing ad announcements to ongoing digital content.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/64608217-e9b5-436e-a80b-ae03d6189fcb_rwc_0x281x1290x1718x1290.jpg?h=3c64eb40eadf27f7179078868e436f83",
    images: [],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/7ubWcd9cZgh/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/EDIXZAy5HGL/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/F53ZLcFhr24/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/63d6eB5UEb7/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  {
    slug: "3x3",
    name: "3x3",
    category: "sports",
    year: "2026",
    role: "Official Event Coverage",
    blurb: "Official coverage of a 3x3 basketball event organized by the Rio de Janeiro Basketball Federation.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/8e109cd5-eb21-4e22-8ca9-30e4383da7e1_rw_3840.jpg?h=c487e31eff71a71f0b69bd744a4fba6d",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f6fd12fc-d988-4259-b544-0b01db62be57_rw_1920.jpg?h=b393eabdaaa168c6ef0b7154d72abb3b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c90753d3-01ff-4013-a07c-3d1157c55c23_rw_3840.jpg?h=bfc41c4909ceb083a697d2e186edf116",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/95dddcac-e165-4031-8cf8-edecd3d2a951_rw_3840.jpg?h=caa84ccb1e30cd08f5120a0cafd73274",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0bee8514-5cdd-4722-a9ab-02f8f539561d_rw_3840.jpg?h=11ab893c31cda9a49e3d043129b5f36b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ca88e3e4-8aee-4ab5-87c5-42f7549a3bc5_rw_3840.jpg?h=51f39c14f6a443910f3417ddef2f22d8",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/032848eb-0e76-42c1-9553-dd0e213f1f4d_rw_3840.jpg?h=05567dea2406d1fc1292e8ca16af50b7",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0e46405f-f861-4e31-8cd2-92abd628376e_rw_3840.jpg?h=37feaaa40594bd9fc6f952d2c6040e6d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/352328d7-8465-4812-a9f8-b24df40b3a42_rw_3840.jpg?h=1ab63d0c3cd6b08d59effb0946828a4f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/449f7e63-84d1-4321-a44b-f9befaf314bd_rw_1920.jpg?h=6ba2b856880ff550dc7f886a9f8cddbe",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/06527b80-9f34-41a7-88d8-8200050e7693_rw_3840.jpg?h=4a8b8502697fe7e0dbe0dd1df1af75d3",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5773c400-51c6-434a-b001-08da22ead747_rw_3840.jpg?h=ae4581eb05efaf67d4fb4aa5cf85fc26",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e5c1bfa9-30c4-4311-86ff-b6db32fd6bea_rw_3840.jpg?h=f3deae83fed8de6bb320d0fe8052fc2f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2dcb9e8d-d01a-4fe7-b283-e08e6cf2bfb1_rw_3840.jpg?h=8adf583e6cc143c3311e03835f2ecb58",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0f5ee10a-6505-40bd-ae37-0a5969673bf2_rw_3840.jpg?h=edc2b630f36c1bebcc939fb921532c7b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a850997f-807a-4117-b970-f310bbc27c27_rw_3840.jpg?h=ced2490617bf4dad9c376ed895b82521",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/80a3e298-cb76-475f-b0bb-f1d6d77fb175_rw_1920.jpg?h=c15630bfda1a7844393959d199301e8f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b5d58f80-16ec-472e-aa70-3262cdf1eb5f_rw_3840.jpg?h=aa055ed5bc61e6820651b62627f13b72",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d4572715-69b1-4f81-b28f-32d0c064bf2e_rw_1920.jpg?h=e1c08538f1ae897d9d2094906d1bf569",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/31adafcd-3260-495f-a79b-49c9aeaeb73f_rw_1920.jpg?h=bef18fa1552d5b71b68aed5f6bea92ec",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f2e732fc-560d-433b-bb55-4b45f2e48a9c_rw_1920.jpg?h=445ddd8111efab99c2719a30e758c7ad",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/98fc834a-bd2a-475a-ada5-01f75820b7bf_rw_1920.jpg?h=f760449017d79f743b6c78aa2022badd",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/92554fb3-62ae-428a-b330-5a8df99a6824_rw_3840.jpg?h=dc691b31ce4d74071094a4909a1df57e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/aebe3622-530d-4e17-9f0b-ce13db49087c_rw_1920.jpg?h=e90acd528662ae41845d6ca7b5a6347a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2ab869fd-cbfb-464c-907c-81e4333d63fd_rw_3840.jpg?h=b14b90abec2e46ac93f3dd348ca42248",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7d9481f4-59e2-426d-addb-b517196905b0_rw_1920.jpg?h=2b55398a7978f1ec6e1f07c22e21a45c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f682941d-25ba-471b-8611-ba496e667510_rw_3840.jpg?h=57f1fbf4ab456fdf9a66cb8360cb4e38",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b497fc3d-4e9a-47c6-8107-06a7360a0399_rw_1920.jpg?h=c32fd9cda8e110311fe25dcdd53a6227"
    ],
    videos: []
  },

  {
    slug: "premier-judo",
    name: "Premier Judo",
    category: "sports",
    year: "2026",
    role: "Team-Commissioned Coverage",
    blurb: "One-off competition coverage at Premier Judo, commissioned by a competing team to document their athletes in action.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1da377a4-0574-4da8-a7a4-c6559b195460_rw_1920.jpg?h=3e4f8e33d8bbcb5b63a5ef6584184adb",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0b4be6e6-5312-4198-ac48-7473519e0ac1_rw_3840.jpg?h=3403adb88df2a816014d99bfe0b8fd0e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6c39b7a3-73f6-4c02-bf08-2498e581c1fd_rw_1920.jpg?h=218f333c56595f5dc957a309ea0700a6",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9a130ee6-1a15-463f-93fb-a0f3a2394915_rw_3840.jpg?h=26e3a477fb6b33dda9510d077de00a47",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4baf3596-9499-4ef8-98f0-b0a4f6f29a29_rw_3840.jpg?h=2dfdafe77e518fccb038ecd22cb6c8f5",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c2b545b4-93aa-4f6c-b9e7-52e683259216_rw_1920.jpg?h=0fccc7fbac43138f0aedb46ac9fafede",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/79c5b153-98a2-4ac9-99c5-9e413655a85b_rw_3840.jpg?h=4469c92d6a085bd36a7a7fc007fd1f85",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/644eace7-eb48-4bcc-a9ad-31279afa90d0_rw_3840.jpg?h=d0b4d73cdec44fc35bb471e32986341b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c5ff002c-e1d5-4920-9504-a2d6d59d1bf1_rw_3840.jpg?h=f4e286bc4f74072e7a38156af1b8f90d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/db93973d-11b8-45bf-beef-c9fc77d6bd6e_rw_3840.jpg?h=960938a2868818cd5539eecb56ee28cc",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3dedf637-6bff-4f83-8718-58da471248a8_rw_1920.jpg?h=2986fb41ef83f0a7ae34995faffca986",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/be5e1107-49e6-403d-af35-73631af910dc_rw_1920.jpg?h=081654c129c846d97c03514eba4e20b6",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9ab5cdf3-6716-4fc6-aba4-1f2aa91f5a54_rw_3840.jpg?h=b29c4c6f6ce53b05e4dd64a1e6227ea2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4cbd35b9-d709-4b54-9031-88e5ab4e64c5_rw_3840.jpg?h=5d94fce1db1e77c52e62c2a9206c01d9",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5135dd1a-b421-4ddd-b5e9-fffeaea8cc11_rw_3840.jpg?h=37a8526f9c309b4879500596bfa436ce",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d1c1b685-7263-4975-b9e5-5653227ce1ea_rw_3840.jpg?h=dc3cb20515f8cc9911ec029f898d8c5e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/cbec1f06-cc6c-46cd-bd18-4fb2b6929db0_rw_3840.jpg?h=cec80cd916a38df6d43405565f34db5e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/8e95d3ea-9bb2-4bed-9ad6-1160302ba09f_rw_3840.jpg?h=7c0b56eeeb98ac57a9b1a445227831af",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/fed3352f-d29c-4b83-b328-a65206b73622_rw_1920.jpg?h=4bf41dbf8caa33e1d5b79eac2618a6a0",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0978459a-ae6a-4861-8a94-651c876db8cb_rw_3840.jpg?h=79253160139a936ccfe88a0a04a6ac66",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/785b24f6-c3f6-42b5-8475-4e221e5fb9df_rw_3840.jpg?h=b8814a8a21d3d3541ce7a629d44e5de4",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/fe193707-27f6-49aa-bd2d-148297e1b473_rw_3840.jpg?h=5fbadd98d0c7a387f13aa0b27c275203",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/39c94897-1891-4a2a-a260-1bf464fd39cc_rw_3840.jpg?h=07a98c0cbe3817ea18d8d99eba9bc58f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/533f5f5b-08e1-4969-b9c7-7707f6e0befe_rw_1920.jpg?h=bb8675c25fa39bfc06cd38a0a2dd9b8f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/317a9209-e4d5-451a-a063-515e2f92a2e3_rw_3840.jpg?h=d32f8db3d90c32c1a459e5be408cb2dc",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/34c12952-5cdc-440f-ae2b-fcb81db601eb_rw_3840.jpg?h=3d51caee5d7fb17e344c6139d361009c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5aac5d4b-e262-4364-b972-e15aebad9c10_rw_3840.jpg?h=8cba99cb28926dab64ad47383826f271",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f84ca27b-9f4f-4d1c-b47e-3b70fb808d66_rw_3840.jpg?h=f8ce14aa58e7660612f83448356789ab"
    ],
    videos: []
  },

  {
    slug: "ct-academia-futvolei",
    name: "CT Academia — Futvôlei",
    category: "sports",
    year: "2026",
    role: "Training & Coverage",
    blurb: "Ongoing photography and video coverage for CT Academia, a private futvôlei training center, capturing training sessions and athlete development content for their social channels.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/46f28fe5-ee2e-472d-a641-6d783851b320_rw_1920.jpg?h=d090239995d12b2daca13879c5221b79",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/eda49937-00ab-4f8f-b278-52acc1bb0bc7_rw_1920.jpg?h=28b406a7e31d6dab2a966096a8e1bb0c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1e8a36f4-8f3d-4b1b-95df-7d656282866e_rw_1920.jpg?h=738777cd01f3efd0d3dd2f3aa6d5b085",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f6f6fb34-957a-44ad-8ce1-67b7305eb094_rw_1920.jpg?h=09e9bfbb62ae6d2877b43da640bf956e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/322ec34e-6936-4419-a72c-6de8ff6e5c62_rw_1920.jpg?h=6c5725047df6d942207a0abb5c8b5aac",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9a967d3e-dca7-4886-861d-a76c637bb8d5_rw_1920.jpg?h=7b5db57f6888e1cd4c86e02d66331b28",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/96aba9b1-ef51-4ffc-9461-402cae7b54da_rw_1920.jpg?h=3f72c9585da433a0f6ac8ca13d8bd9ba",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/678e2419-6bcd-4155-93d8-52eafa2d4ad5_rw_3840.jpg?h=098d0a9beeb14a9201d6c5ebbbbb0272",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c1dafddb-6316-4af0-8801-3b1ae6cdb813_rw_1920.jpg?h=e5a28d950abc616a003b6091c5e19595",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/93e73cf9-c5c0-4c86-a07c-afe6cd601fc8_rw_3840.jpg?h=a5a6d03a5eb2c4c3862a3d2c19e4420f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4659653d-e79c-41b0-abc4-f50b956a2ee5_rw_1920.jpg?h=7c58de7586893df6750547de74740b40",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1c0bd101-3d48-499e-ad8f-2a46b64cfc22_rw_3840.jpg?h=daadb805dcf5cc7b0f1b2dc3fd0b78f8",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c871e4a4-a612-4bbe-915a-954c9c95ce7f_rw_3840.jpg?h=103d578795482718bc73a055713f49dd",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6aef41c0-9eb8-4e40-a2d9-f62e6c15762b_rw_3840.jpg?h=675d16b626bf6d84263140ad0a04a778",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e425c0a7-a811-4358-bc5b-4dda1da6c063_rw_1920.jpg?h=df605db159a2824a8cd2afb4b35d8619",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5d8f70e8-a53d-4757-9613-8f9375e5a53f_rw_3840.jpg?h=ef78f40e59f3ba5bb769fae4cf34a9d8",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d1025e84-11bd-4c17-b49b-fd2d14846beb_rw_3840.jpg?h=3adba6c452673dbb6d925a94acc94168",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b168feec-711e-41bc-8153-95541eb177be_rw_1920.jpg?h=b8cf13b18cc5149e43b6601f754c7fcc",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e6934021-5a20-4998-9fc4-35409b362019_rw_1920.jpg?h=5863b5ed193dc43933da0722b9284cfc",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f706885e-ec8f-447b-88fa-c68abf94d0ae_rw_1920.jpg?h=6f5e0c17c87687c25be089450c1e710e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e49edb19-323a-420b-aef3-710d9197524a_rw_1920.jpg?h=b589d8aff27b23a160c697b210e05eff",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/382a573a-7b50-40cd-9210-5b2918d4924e_rw_1920.jpg?h=e1ec420025a928e8bda602dadebb5ed3",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2abf9156-f159-4ead-a6fd-6726bd6e3d87_rw_1920.jpg?h=4ebc2a8f98c875a8f1724350070c5687",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/07e70386-58b4-4f1a-b0bb-4a1727bb5654_rw_3840.jpg?h=bf2ff51f31e42d0644e90bf1517bedde",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/659d8900-0a76-4b1d-8f21-e9e06eb53af9_rw_3840.jpg?h=0ef71266018d01b458432af1eece3829",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ab8f579b-7759-48e5-b739-bef2a25f4f1e_rw_1920.jpg?h=026aa2386df29ea6c5d9da787697a471",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/39ff828b-7b9f-49ce-ad7a-b5ee47cad2d4_rw_3840.jpg?h=7903c24f852f30fc2b2b46d70d708ebd",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/89a62475-6d6c-40bd-b185-59967830d882_rw_1920.jpg?h=06329460a54ee21ac4677962494fac35",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5db45bdd-78ad-4265-9103-76994e2770aa_rw_3840.jpg?h=ac3773c0456593a56e1f65637157a5c0"
    ],
    videos: []
  },

  {
    slug: "sbpo",
    name: "SBPO — Sociedade Brasileira de Psico-Oncologia",
    category: "events",
    year: "2026",
    role: "Event Photography",
    blurb: "Event photography for the annual scientific congress of the Brazilian Society of Psycho-Oncology (SBPO).",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/649b6471-ef4f-400d-9b24-2b592b3e6003_rw_3840.jpg?h=a3c8cc2f71615a8eb5efc91521cd312d",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a2b2616a-aa9a-4df9-917b-007d2dd845de_rw_3840.jpg?h=c48c72ce191bf5da7775b1353c0a97ee",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/605584aa-2f95-446d-ba27-ecefc839cc22_rw_3840.jpg?h=44e891c2a757f1ec7719ad9e360b1b28",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6d4718c0-ff88-4951-8dd6-b0944d4c43fe_rw_3840.jpg?h=2131425e87ab5c4cef8a29042d39ebde",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7ef774f2-013d-4163-8933-1ccac21efe68_rw_3840.jpg?h=ebcf537392bdd97c60eb97cdd01114a4",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e1ded5e5-db95-4a4c-b337-1ba6104e69a7_rw_3840.jpg?h=be16cdd58b7a2b494d0a94c39d6e9f78",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ba3ef73f-ad45-4797-8f31-79b77e4631c5_rw_3840.jpg?h=91b4a8eff861068920f711263aa4520f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2866470c-8d93-460d-a084-7b374ffc2551_rw_1920.jpg?h=116c7d557b8299cea2b897d761ff5307",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ab9b8500-a637-4119-bb25-070a8ce7c98e_rw_3840.jpg?h=8cc078b5b16d29c64504786dee523577",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/01553a6c-b21a-4d6e-b6ed-88079983a292_rw_3840.jpg?h=b4f5e84a18d288ac40d12abceef2a86e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c69a9a56-8351-4a56-b271-50c5ebd614e1_rw_3840.jpg?h=aee361f1e4e617122c5c9d0d53d7061f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b2198766-fb46-4f5d-8487-e6d657aaf9ae_rw_3840.jpg?h=2ed0dbe9c3faa68e3ae8c38e5a162af2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e0161358-a22d-4f6c-a973-84ebea92b8a6_rw_3840.jpg?h=98265edc6e886f9ac67716d08d3fa687",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3f76bc7b-92de-4cda-b539-5e4d1fb365a3_rw_3840.jpg?h=76fa1739e401b736bbf15c6a105e0099",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/83366c9f-1c7d-4bf9-a990-a04de60f19d4_rw_3840.jpg?h=48d5d2ab80588182ccbda50b627256bf",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b2076de6-5ede-4124-962e-ef37e586c5b0_rw_3840.jpg?h=08321f9ae84396ac74210a5fccc837ad",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6f8fb30d-a51b-4ddd-9828-a2826ebadebb_rw_3840.jpg?h=47e9a9c0402ab085ee737b89b58c27f1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/532dc471-31ec-48fb-af5f-cd2dbadc9e06_rw_3840.jpg?h=1fe5175a0a29c702ea61cfc7b092ec23",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/bdb542ea-0977-4c3f-8d96-08c086158ca4_rw_3840.jpg?h=99ebe8f1ec3bbd06c4cf8c2fe5b41130",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9fc00f25-2f58-4a8b-8f35-f7df9efcaf09_rw_3840.jpg?h=11109d7cea1eb28ac95423b03901dbe6",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/dd37fad6-e764-4eca-b040-b0a2aba5dac7_rw_3840.jpg?h=4b3e603546c99d09d5aa07745efaa403",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4ff26f49-f68b-4aa6-88ff-744d20179abf_rw_3840.jpg?h=f16370f72b4184ce94f625847ffc5462",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f9486ac7-dbff-4cae-8e10-640da589ce39_rw_1920.jpg?h=8b65890da6e4d36b80a0252a9ebc7074",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a4a96d84-e76e-4545-a1e5-f6e932e466ef_rw_3840.jpg?h=9f50d41ad907ac2c4ecde1e3f413c44c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c08e2775-0065-4a29-b3f9-a46a08ea9cb0_rw_3840.jpg?h=5ec2fd94ebdfb127fe61da2be4bcaf1a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f11aa500-57e1-452d-b1af-2df9cc10035e_rw_3840.jpg?h=f4c724f113b29181ce57a5be4a42114c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a0f0e695-cb7c-4c98-883b-d9ab5b179ef2_rw_1920.jpg?h=a1041f2079cfc6a86a2cfdf247f361fc",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6a374c0c-f3c8-4e04-b59f-ca7dd2ed4ad9_rw_3840.jpg?h=b1c9bb9fcbda4a46826c26f22fe24bd8",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/919c1bb0-ceb1-45eb-bd3b-285f0637c846_rw_3840.jpg?h=df3f5ac260feefb27e937d247302b33b"
    ],
    videos: []
  },

  {
    slug: "ct-caio-alexandre",
    name: "CT Caio Alexandre",
    category: "sports",
    year: "2026",
    role: "Training & Coverage",
    blurb: "Ongoing photography and video coverage for CT Caio Alexandre, a private training center, capturing sessions and athlete development content for their social channels.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7773b031-c307-4f86-aa79-6cd6893c4ae0_rw_1920.jpg?h=94797b6066b538783ba473fcacd0243c",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7947870b-dd19-45d6-b6a7-59d24fdb51a9_rw_1920.jpg?h=588d970af0fe8a189df42423b210834f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d3ede26b-5aa5-442c-b685-779ebaa4a927_rw_1920.jpg?h=7ae8777d73d5bf5688cda9e46eaf5591",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ff4a43a9-0b72-4c87-9dbc-dce7e873bd4d_rw_1920.jpg?h=05391ac6dbc72b5adcfed7a447eaf95a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/445dcdd5-da43-49f9-b044-47875b0b56b9_rw_1920.jpg?h=072eb04d3406485947712ef2d0e5aa4a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/00b55d1f-8290-4405-a832-69c6cf7b3f0f_rw_1920.jpg?h=aff36ad6b10d4170ee6fc4a9c2b1e2a8",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/01a65922-e73f-44c6-aa3d-61790804e8ea_rw_1920.jpg?h=6db9bba6b84a30703b1f28babde1d21f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ee608c75-ffc0-44c1-8ec4-24c611d44ec1_rw_3840.jpg?h=d104e5646e78511918671943ef69d5dd",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3c55c779-38f2-4296-9f23-920041d0871f_rw_1920.jpg?h=2d3891928c1b1235d2f91d4d84ffddda",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/219f925b-68cf-4123-8c18-00d99db3a348_rw_3840.jpg?h=97a601505aaa55e8b1b6bbab37de61f6",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4b5516e8-fbfe-4681-92ed-4390fcf7327c_rw_1920.jpg?h=d10643145bde6bc00658d93b348d5d8d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ca2ad6fa-91a9-4542-b84b-687b5bfb2a00_rw_1920.jpg?h=02308fb2bee8f8599af5df6d5dd696f3",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2217b6dd-546d-42d6-b242-b288c4d76067_rw_1920.jpg?h=8fc85785841fa5cb944a906dcefa9a4d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3cb0f581-d923-4ed1-9af3-0e38b8aca47e_rw_1920.jpg?h=c0194586910b46e097c6d25b4db9156e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/933dcab2-af7e-4425-9ab7-86461d74337f_rw_3840.jpg?h=575f9fff486db36e730ddb9df70ee30e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/78f9084b-8376-47a8-8b3d-3abd7a617935_rw_1920.jpg?h=688d10598837b378b088a7baed198b3d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/95bcc6f1-5506-4c70-b7af-9596615a8d86_rw_1920.jpg?h=c99f824c111b0970d040a2f1e1cb9d04",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9711be3a-ef15-4de4-bbdd-c6b8c0f8ecd3_rw_1920.jpg?h=b7a381d2c54cdd83e364d72cd7d82b7f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/270630da-7f01-438a-84d6-a1baa5e388d8_rw_1920.jpg?h=31271502cdbce9e40f976f821928c576",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/da53d733-ac31-4d53-9c94-bd54ad11b548_rw_1920.jpg?h=1907b806cc7e368d061fa34cdc4bc51f"
    ],
    videos: []
  },

  // ---------- BRAND & COMMERCIAL ----------
  {
    slug: "mrv",
    name: "MRV",
    category: "events",
    year: "2026",
    role: "Launch Event Photography",
    blurb: "Covered two property launch events for MRV, one of Brazil's largest construction companies, delivering commercial photography for their marketing channels.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b6608598-d206-4f4d-82b1-3c9e7adf6054_rw_3840.jpg?h=403cf89f0a553830a8492559a578d0ae",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c22bbfa5-3eee-451a-b107-54071f279f5a_rw_3840.jpg?h=2a030c5da1a2df72825a51706eb511f3",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/834747dd-8dfe-4fb7-9ab5-42ef500d3478_rw_3840.jpg?h=02c831238995cc2e55636081283615c8",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c1751de4-351b-492d-baea-dd57b74562fa_rw_1920.jpg?h=c791f0460d34c5f35acd838fb7d5cdc6",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6ce239ca-9e60-4c3d-b547-be2c6e1dd88b_rw_3840.jpg?h=be6b32c92d6298903ecba6e4be75eaa2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/508483fd-720f-419f-80db-6b5a09cff16e_rw_3840.jpg?h=3972cd091e7675e70797eb786c1108b9",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/63915d73-b74c-4beb-b54d-1a222c6556c9_rw_3840.jpg?h=e0cbd0e8d6bce3511af9c7fefc309f48",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c71324e1-6534-49e1-aee7-9bfc97f48f05_rw_3840.jpg?h=59b31f8cfc6ee5053ba8b975014749de",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/bc9f44a1-b1d2-4c4a-8af0-be9e4ed34b1b_rw_1920.jpg?h=5633b850ca5e58bb628198eaa9bbf7c0",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d3fde66f-6b54-42a8-80af-5dc71ea7124d_rw_3840.jpg?h=c28b438f006b2b497666e5e6382df27a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/80e853e6-bb72-4595-bce5-ef28c3d9432b_rw_3840.jpg?h=a0ee0f368c0b9e05d0c84eb15d51de96",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/14934e20-06d2-49dc-9ae1-7928c1a6f9ad_rw_3840.jpg?h=f0ab72519d2f0ff7f7bea4c9e882e4ee",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f09a26e7-dd37-4eed-83ec-79cce5c03c1b_rw_3840.jpg?h=287e41e6b04cc120fd5e03e09ae5bc64",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/fa806040-e4ee-48e4-a864-aee998470204_rw_3840.jpg?h=760fc29b5771581f71d93e3d48b8a769",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/422f8b3a-5dca-49ad-b2e2-87ed57b21d36_rw_3840.jpg?h=b6ae4d9800b4b7e265efcadcb5e4bb77",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0029ac8a-e9d1-45a6-9db2-5051c1cae0ab_rw_3840.jpg?h=3ed74809097748255d7795206ec9c9f1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d93c6be8-cf28-4342-8954-a1b4fabf2b2e_rw_3840.jpg?h=40f9567a40ff0f3f0b9ee682020d55d2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/87f56cf3-d97a-486b-bd05-8f04ae297916_rw_3840.jpg?h=df8498e435ab31c8ec197d2dd15ab284",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/141274fd-44bf-4b1e-a45c-198c1cae3468_rw_3840.jpg?h=6c6cac7dfc9735d4b67984f353727486",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b3f822f9-ab08-4d93-9133-5d6a69ab2bcf_rw_3840.jpg?h=df17e560292bbd76cd1d86a26544c67d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/bf2951f5-2402-496b-bb03-8f43d1f16e00_rw_3840.jpg?h=49beb060fdd650750811e4725c79f39b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2d6877b8-2b5e-44c5-bfb7-48f945dc3d46_rw_3840.jpg?h=78e70a32c78377bec2c80fac881d3893",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/50f90ea2-249c-492f-844e-be5d9332d411_rw_3840.jpg?h=d1adab0ff333bd47fe55602ab3677879",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/24f01130-db01-444b-8c4e-de3be1c98091_rw_3840.jpg?h=48bc98530a04925e565acc1c6a7e22da",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7ac3f7a9-e2b4-4e67-9724-d4e47f170f7d_rw_1920.jpg?h=6877fa4091af3f70688e8e6084efeaa4",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1925a8c3-a74e-458b-ad62-985cfbc1528f_rw_3840.jpg?h=e10ee24941aabf0fef9be3991ea9eca1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d18cbe62-befc-44ef-9621-26ecddced66a_rw_3840.jpg?h=288d5390a90d4ec7bf9526f45b856148",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d353cea7-1a43-4a7c-a3f9-086cf181f5a8_rw_3840.jpg?h=03ecb253a4c51a9a979c44640a104a3c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b342a414-d2aa-42d2-8d90-9a41f6d19fef_rw_3840.jpg?h=ba761f6c1bc04c87a61a497aa1d2a2d4"
    ],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/Rzi-4UikPVq/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/Ui5nbJ33IdA/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  {
    slug: "via-mia",
    name: "Via Mia",
    category: "brand",
    year: "2026",
    role: "Commercial Content",
    blurb: "Produced commercial content for Via Mia, a Brazilian footwear and accessories brand with 70+ stores nationwide.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6e2854de-e170-4a60-a4fc-a57b3d2c90b6_rw_3840.jpg?h=fdb48d095184a1892c446efb487c33fc",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a8733513-dd3f-430e-9e6f-acda7a35d194_rw_3840.jpg?h=83a7b992f46e8b4e51ca7ac5481bdce6",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4b93f7f0-dbe1-4364-8a8e-7c145b86c1b5_rw_3840.jpg?h=de8fe80ad1b29eb7a87eeda6a5a9f9cc",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/01b9e426-67db-46fc-a56c-7ec41b3ca7f2_rw_3840.jpg?h=d98d698a010b257cf27b7533ed7f311c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e2174875-a7f0-42f8-9511-02db01051efb_rw_3840.jpg?h=5815c1992b6c41d8da066f84c179602d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2a6041b8-e09e-4999-8bba-bb4dca69437c_rw_1920.jpg?h=728367f55aa9101c8c32bab238594b5f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2a180781-cbae-4df0-84a1-076124edb41d_rw_3840.jpg?h=fbf1dac5db26d4b628444fe194ab795b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/237f213b-7287-498d-98cc-2587e25ffb0f_rw_3840.jpg?h=9bab4d4972753e443835dc2f1d21c922",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e7a7621a-0476-4295-91e6-194616ce1dcf_rw_3840.jpg?h=6c4c9d9cd304cf771278d8440704e224",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b610c19b-419e-4d0e-98fd-735ca7a7477b_rw_1920.jpg?h=2c31b1f8b3c8f3a94e70297158a71bbf",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/951b7940-9f2f-4ff0-9fc8-f75156f8d374_rw_3840.jpg?h=a13aa483ef118bafb31e31b53a1c3391",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/bb94e6f7-8ea2-417a-9bc3-f15c05bab9a9_rw_3840.jpg?h=cd67d6ebf4278e6a285ae0c2b5effe6c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d2521de4-cbba-4179-8883-3be5dac97e42_rw_3840.jpg?h=d005db572eec9b315a2bb93292fef021",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/10d4b3eb-fa9a-464c-a2ff-44440b32b485_rw_3840.jpg?h=eb8cf08fcc3be9e8e5dc13c120bbde63",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4edd9559-3a25-42fc-a5b9-e5cd8ac98374_rw_3840.jpg?h=6325c4d6850b443905549a5621f4b28c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4563b5d9-be94-4056-9283-5e25d7d82372_rw_3840.jpg?h=de68fd5f36e8f1972cda07863c335120"
    ],
    videos: []
  },

  {
    slug: "orbe-piscinas",
    name: "Orbe Piscinas",
    category: "events",
    year: "2026",
    role: "Event Coverage",
    blurb: "Event coverage for Orbe Piscinas, a swimming pool company, delivering photography for their marketing channels.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1e75b005-862c-4777-9b79-60b7a85f493f_rw_3840.jpg?h=b8926f8ef2e4d088a3024b7245d79d63",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/76a721c0-de75-412d-99fc-0b9fc39289c6_rw_3840.jpg?h=361380b50d6ba4a0fb994fa8d792398a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/983e31e8-a743-4c38-a144-741dc2045b38_rw_3840.jpg?h=438724225eaf0c30508c73387323f9fd",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/8a8e9df0-fd5f-40cb-82e9-39bbc1a08de9_rw_3840.jpg?h=c2b5f48c4ab23b296b4a44e3fdffa0bb",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/cdca65ac-fd3f-4ed8-9dd9-56b18440b186_rw_3840.jpg?h=cdb83c4e0dacf76259e0f4ded7c9770b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7c8239fb-898a-4be3-b69d-3975f45ca39f_rw_3840.jpg?h=a98595d5ba7cad66e8c50102692c7111",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9f0b1f2e-6d1b-4c5d-9458-fc69cd1cc6a4_rw_3840.jpg?h=4c2890adf8875d0505f7f751aca67d11",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c81cdc2f-309e-49ec-a0cc-147f5a31394a_rw_3840.jpg?h=50004dc05f0a8f6ecd37a1e0931cbf35",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/47843f46-3807-40d8-8cb7-7c4a2747f95f_rw_3840.jpg?h=8a291462c3564b5772f8f14572f5d0e1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3500b2e2-d6f7-49ee-a83a-ade67ba8b750_rw_3840.jpg?h=c6150c349867fa66fd4ebb2f8113ea62",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ed96a9f3-70db-4e43-8351-bf32e55eb436_rw_3840.jpg?h=6d8142108b27c8196455b28c398e186f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/86f9de6f-c8bd-452c-83b6-3d7d54e539d2_rw_1920.jpg?h=67e424147112529d59885b74c9884f17",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/aab7ff52-7dbf-4e91-98a5-d55857de76a5_rw_3840.jpg?h=eec752010e0fa516b044328ad1f19be1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/31637240-d998-45c8-9d86-cbb68de5a5cf_rw_3840.jpg?h=1578ee8905d8c4d911b2e3ba486d15ce",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/20bdcdb8-72be-4cb8-8d54-df729d09e9ad_rw_1920.jpg?h=375904411b2a3592b2604ffab4e8ba53",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/28f7c042-30b6-4d34-ac5c-a8bccd1fe095_rw_3840.jpg?h=eb3c46dd559678f763def6fd002eacc1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/933b9dbf-aea8-4198-8bfe-b99c2a21bf31_rw_3840.jpg?h=b3f1c754e3d86be9720ad74cf5f18f10",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1592baee-d636-4843-bb0f-565f9dc1b911_rw_3840.jpg?h=a4c4c52fde55a968f8ba4e676c81e3c5",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f117b936-f00f-40d8-b638-52f7eb1fc1a8_rw_3840.jpg?h=0175b0c2caec524a459f950a7d23745f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2a4f2fd1-c1b7-4175-96c3-24891a5faa0f_rw_3840.jpg?h=ee7191754746e2d3d46f8150bd91f217",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0830da12-8ee0-497a-a240-6cd73b3ce7f5_rw_3840.jpg?h=ac544567088ebfb86c2611e1a271416b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/181a5832-67a4-49d0-9c49-5528388e0968_rw_3840.jpg?h=0ef85a6ad73b72cb34f1c3d865e262f1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/96e0b360-2878-4c4e-8ebf-770f7bcdac2f_rw_3840.jpg?h=7a1f3be5c3396c8c334eb6218c61bc75",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f1b61336-3445-4491-a6d8-eef5890104c0_rw_3840.jpg?h=e9c6e39e29a8e8bbd0e91bc012d33c6f"
    ],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/CUGpK9koVhk/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/KmJ2wSNroJa/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  {
    slug: "smart-cities-mundi",
    name: "Smart Cities Mundi",
    category: "events",
    year: "2026",
    role: "Congress Coverage",
    blurb: "Video coverage of a corporate congress for Smart Cities Mundi.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4551d496-8b2b-4de0-b698-73c92df68823_rwc_0x281x1290x1718x1290.jpg?h=66cd1db462eea62ba5495bbcb9c1c8e2",
    images: [],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/JxheT9YR44N/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  {
    slug: "upper-view",
    name: "Upper View",
    category: "events",
    year: "2026",
    role: "Aerial Photography — Personal Reel",
    blurb: "A personal aerial photography project — drone work showcasing landscape and urban perspectives shot across Rio de Janeiro.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/de5c53fb-1615-4b16-be51-12c9d4000620_rw_3840.jpg?h=5166c59de44d71ff41501cf588ad0b40",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4947508f-986f-44cc-9d7f-d2ba69281c40_rw_3840.jpg?h=d973d083f1af96022198bb760a41dfc1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a2a60393-7296-48a5-858c-b925014f4bba_rw_3840.jpg?h=ee60da3d6f35bec7d8f8a84ed0238ed1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/16f896b0-0e15-4302-9605-156a67526294_rw_1920.jpg?h=fe8207d73b2a27febd986d85a9c7c771",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e76bd0d5-77fe-47b4-8bd3-2173e5d7248a_rw_3840.jpg?h=add154522b72c9526ab9170cdc688e34",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/48f1b157-3c62-4f2e-b0dd-9e21b129d930_rw_3840.jpg?h=249e6665023c51c91f4fd8ae2a81600a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ce789358-654e-424a-8ad0-6408ed4d7dd2_rw_3840.jpg?h=ee64dc2d7cb7c271b58e18413d4cad7b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/240c8804-ab11-4e0b-a774-5b3f2011e6c3_rw_3840.jpg?h=8d39d1966c140f061a923d7c52cd4f1c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6c5a650c-bc1c-490f-8183-99afed394f98_rw_3840.jpg?h=55e7e88ff95caf23d6c7b8c8b8e67120",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ee88a794-ba1b-4d6a-9773-2e5d7b067a6b_rw_3840.jpg?h=216f4a7fad06dbc3364fcb1e1a09245e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/15a67b2c-58b7-4b99-8e1b-dcf7f1b22391_rw_3840.jpg?h=e889028e4f588b63ba44e4bbb303cfb7",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/40bcc6ab-1c6b-4d0a-ab7d-ceea39f60147_rw_3840.jpg?h=e6445bb8ef102e1120dff1247acb9acd"
    ],
    videos: []
  },

  {
    slug: "dr-carol",
    name: "Dr. Carol",
    category: "brand",
    year: "2026",
    role: "Social Media Creatives",
    blurb: "Produced social media creative content for Dr. Carol's personal brand.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3fd9b6d4-bfbc-40f9-b3f6-9cb3d7f0fe2c_rwc_0x164x1290x1718x1290.jpg?h=2aaa6826b2760e46f4dad58e776f8cb2",
    images: [],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/2xfGqWFRUE2/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/UeHYrIApLD9/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/7DaGjjE2kYm/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  {
    slug: "mocellin",
    name: "Mocellin",
    category: "brand",
    year: "2026",
    role: "Restaurant Brand Content",
    blurb: "Produced brand content for Mocellin, a well-known steakhouse restaurant.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3ae37f4d-3ca1-428a-9081-8f1e41daa8e8_rwc_0x187x1290x1718x1290.jpeg?h=93e0da47e9d339963807e9f188dde964",
    images: [],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/CAX_3Z3wAnD/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/JtyfYxbEJxf/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/JX5TIMArmhC/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/Qw_dLUTn94h/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  {
    slug: "gleids-doceria",
    name: "Gleid's Doceria",
    category: "brand",
    year: "2026",
    role: "Product Photography",
    blurb: "Product photography for Gleid's Doceria, a confectionery brand, capturing their desserts for marketing use.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b36b6915-0d4c-438a-8188-0a73b342441c_rw_3840.jpg?h=ebfbf6544081392e8adfebd61b5421b5",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d0f6b9e5-801a-42b5-a3f1-7bb4162806c1_rw_3840.jpg?h=b51c6b00d17caaa2204589bddc1f6adf",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/917ce6f6-2383-4fa7-afc0-459963529229_rw_3840.jpg?h=8fe2d77112efd84422617e3b03e63091",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ed1622f8-6aee-4175-8135-cd935026fae9_rw_3840.jpg?h=dd8ec7e11954802317b7d865a060d80e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9d2f989e-7fc6-49b5-82a6-b996db9b886d_rw_3840.jpg?h=f41edb5f5e9a3a1bcbe263ac21381b5a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/dae384c8-774b-4813-afcc-d0dc123db773_rw_3840.jpg?h=8591880b03d7c60c665a9ac42982a5f1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/403b9ffe-4669-4c16-850d-a55d6252ea9c_rw_3840.jpg?h=b49580a465ccbf94fa66b85f802ef1e6",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/147b32c4-65a9-47c7-86ab-fe0915fe77d0_rw_3840.jpg?h=28e9e327b4bb923d20c22a0e3a87f574",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/8a16f6fa-8f52-4830-b581-03d4796fb524_rw_3840.jpg?h=112d5e3e4245f8b2f9a70a71127fbc6c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7dba4a6d-008c-4071-8eef-12e50c2162dc_rw_3840.jpg?h=4e631776cc934d2483f93fdd31181551",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d484a7df-6624-4bef-867b-a47875c28e4c_rw_3840.jpg?h=a0cf3eac68bb5091b58ad01693dbf872",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e5b408fa-40ff-417e-b37a-110feb462c87_rw_3840.jpg?h=f2a4661e9c246a64a2be04d8e3bb43dd",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9208a440-73e8-4832-b878-53f8507f7323_rw_1920.jpg?h=bc44b10b727c3d937c94ff4e6b9d4a6e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/eb0865e9-b69a-4cf1-9005-3221b81f2428_rw_3840.jpg?h=757e7681c730906d9bfa279e567ef8fb"
    ],
    videos: []
  },

  // ---------- MUSIC & ENTERTAINMENT ----------
  {
    slug: "qdb",
    name: "QDB",
    category: "music",
    year: "2026",
    role: "Festival Coverage",
    blurb: "Coverage of QDB, a large-scale “festival de botecos” (bar culture festival) featuring live music across multiple venues.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/cfe78991-d492-4737-bf8c-91a7a0f09883_rw_3840.jpg?h=3ed055207fd04a4fbfc6b065b71869a2",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/413c36ae-9b53-430f-8cf8-24e434fed26e_rw_1920.jpg?h=7d6ecf932430b6d292bfc7fe7beb1bc4",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f06fbbc4-9577-4782-a51f-87ff89aac1e2_rw_3840.jpg?h=de83024b837ebf2f397ce37f97d7c098",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f5adaf3e-e3d0-413a-9d54-c8b48501be62_rw_1920.jpg?h=c9d3e135b27d1abdcb6022adf416362b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/930f18ae-b4a6-45c0-8bec-d6c6ce874c7f_rw_3840.jpg?h=5837eb8ce905b6536b564b8c62f07dcc",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ea332d1b-02bf-41f1-9013-67b8bac44c7d_rw_3840.jpg?h=bfb321c79e94ab5567af0705be2ae094",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/75a5ed33-c382-4291-8684-79d26290248a_rw_3840.jpg?h=7819712d2ef3164d2a0c2c37d39f3c69",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f26b1cc2-5ad1-4d93-ab59-1c9c5d66a692_rw_3840.jpg?h=4da3096ef655dfbfd6a9abf191fe9f47",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d346b7c5-80fa-46d4-b393-16f1c01d041b_rw_1920.jpg?h=d4837720401ad36f9c6c8c93568df35d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/50f74805-852e-4efd-b890-bfc15e526467_rw_3840.jpg?h=567843c493e5b2e40b442e97c17c4f2b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b8fac1e6-0406-4495-9d7a-d05d4894116b_rw_3840.jpg?h=b535d1ff388f0afbe3cb5e1aa72cbd8a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/8f257a31-32f5-4058-adda-5899b66d90ba_rw_3840.jpg?h=d397efc2e822471bd0c60e333933148a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/143de79c-1839-4396-9d16-4f8a16bad70e_rw_1920.jpg?h=51712786fd1556c148ff3c6579d1d2ee",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5e5b8357-d4b3-452e-a376-36f2f1a89dd2_rw_3840.jpg?h=6fc33df393b5b358d1e77b38661048f9",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e225b990-e2fd-410e-b0f2-bf0df26806c3_rw_3840.jpg?h=5504d6bf7a892d05855f8c1ddf25f262",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4a393ca5-a1f3-4054-933d-54c9bf01d5c8_rw_3840.jpg?h=9f28f2d0b9ab5a09f3cb1033a24e4b5b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1f555d8a-a77b-412c-a292-3a31efc6df47_rw_3840.jpg?h=f9f6321d5ac23a715c8adcd1e2fb614a"
    ],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/QhwVMfN9Avv/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/DBBKT8DNxxL/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  {
    slug: "joao-gomes",
    name: "João Gomes",
    category: "music",
    year: "2026",
    role: "Live Show Coverage",
    blurb: "Live show coverage of João Gomes' performance at Caxias Festival, a major music festival in Duque de Caxias.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a2ab1fc6-ccdf-4c16-a518-c3f72b85c0ae_rw_1920.jpg?h=83f94d0872cbe3fb2c5bb68a55a39e6d",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/8df51c4c-3ff5-4acb-a13b-23fc2177e0a8_rw_3840.jpg?h=75a7a5c23668b500ff6250568beec270",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c9c03445-5a19-45a5-b91e-98af1280aa60_rw_3840.jpg?h=4c51a8b96582103100cbebf147b4e847",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/624e9d6d-b444-4256-8501-700b48f5f84c_rw_3840.jpg?h=36b630b3ee5d0901fced5586ecad6b21",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c500b7cb-3355-4536-a755-36c8c1e27e6d_rw_3840.jpg?h=87778849115224ed1aa00436904e296c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/78c78d65-7136-43c1-ad10-3ba46a9fd906_rw_1920.jpg?h=d3e4c5b93607a289b2f583c66c746d73",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1a4f779a-3058-4847-8205-c129372edcfe_rw_3840.jpg?h=665d4e3b8a6c8a3b619b758905a118a3",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c686742a-2a11-496e-bbf3-fa10f12de2fc_rw_1920.jpg?h=452f03a4324fa8e1b5b96c91090ab88a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ac63205e-9a11-419e-83de-fa61f3b40e59_rw_3840.jpg?h=10e989950b3fbd2b357ffece8a12daf0",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/71df7efe-0707-4cbf-8684-d73494697e64_rw_3840.jpg?h=579b9b214b2c23f86dc12e29f84b477b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/af260170-8280-422e-aeda-de0b19e4927a_rw_1920.jpg?h=327b96e13522161c02cedb96aed7d1aa",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f1a57942-d043-433e-97c4-1cc2161b22c9_rw_3840.jpg?h=0353e6dad4cf14fc6564e14f18a27d6c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4b8401a1-8ab5-4360-898a-e2c1d455ce51_rw_1920.jpg?h=39083ec5bce41d1771e1838f7ef09a28",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3345dd37-b7fa-4336-bfe1-e1ca6e805d6a_rw_1920.jpg?h=50560d9badc7c1ea8f21944e6165b8e9",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/295aad5d-bc02-4425-bb58-679a6996063b_rw_3840.jpg?h=16e7234a1069600f44cc6e8c3ae9ee55",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5df7ccb0-0eb6-4d9c-be4c-8b4825cd4cec_rw_3840.jpg?h=ee15eac2e120dc68cee9ad522658cd6d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/11af1da9-25af-4c8a-afce-3b503a2ee372_rw_1920.jpg?h=54e4046062fd845fb55fefeaa09972a5",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/48ffad24-b77f-403e-b758-615adab0436c_rw_3840.jpg?h=db54fa5120edf446ba94da6caf147509",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3da6cbf5-561a-493c-bf20-9652a2899304_rw_1920.jpg?h=7c1c78e415474db5d83a21e30235d2b7",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/21c32ed5-409e-4ef5-8f0d-45c8f84c926c_rw_3840.jpg?h=607245027e0b37a4abeccf5242dbb079",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9c96005e-ccb2-4ed1-baec-6a1d4cfac18f_rw_3840.jpg?h=3d16b62b86008f876ad8e117b9760dc2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/40dfed52-e4a3-452e-b86a-f44448bb2c2a_rw_3840.jpg?h=e91b144ae212756370e7ab5c0bff40ae"
    ],
    videos: []
  },

  {
    slug: "zeca-pagodinho",
    name: "Zeca Pagodinho",
    category: "music",
    year: "2026",
    role: "Live Show Coverage",
    blurb: "Live show coverage of Zeca Pagodinho's performance at Caxias Festival, a major music festival in Duque de Caxias.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c8e8a3bd-d708-4ed1-abff-d05b2b929f11_rw_3840.jpg?h=89a13fdc1b120d63663e7a0d309505bb",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/08339ced-ceb2-4fc9-8422-a9478db8157c_rw_3840.jpg?h=3683c7d9e5342a994ad6c0cf075537c0",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/815bde62-62b4-4ed7-8233-49273163acac_rw_3840.jpg?h=a33c4c2209f591a379fe5dde7114f908",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/bb8d1ab7-10d3-4d97-b07e-b33c2960db42_rw_3840.jpg?h=287648731a5706ad57a91d20c730f4d7",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7af256e8-a668-412b-846b-8dbc5629d552_rw_3840.jpg?h=921a1ca85a418994addda5d7f2ebbf2c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/320817b6-e0ed-4a5a-88fd-a2f862bb9c6c_rw_3840.jpg?h=0be32350612b5f89ea18a6242fb7f79e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b4cf5386-b377-4a54-86d7-4587143818d6_rw_1920.jpg?h=953de45c47f21e45e8ee9ac4de146c85",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/66655ab7-aafd-4ae8-b648-15c0011503a7_rw_1920.jpg?h=c0bd2ccf6325c327738be0e39eaaf09a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6491bb1c-7128-46cd-8930-7d3bc0fd7246_rw_1920.jpg?h=ce9374ff19d0508f5edf13da51f4694e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1ceba004-d3c7-4ab7-8879-f96266bbc0e5_rw_3840.jpg?h=6b8fac8b0651ca5cda878ac369442e35",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5d5c0e21-9fd8-4746-b3ec-a7415e37f230_rw_1920.jpg?h=5786ff120a8051eaebd394b0a45ab49f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/be644510-118e-49ff-8a95-a2ddd6f38658_rw_3840.jpg?h=cce65136d0206929bbbf7d8958008fe7",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/cf7057ae-aadb-4d96-8469-37da2622ba31_rw_3840.jpg?h=f1322ee670f5d4f0b36d2e3bd4274b4d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e69baab1-d50f-49a9-b19a-3569f0c4aa8d_rw_3840.jpg?h=327fc1d9f56cf73a04c32d354737949e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a0304792-d3d0-449a-b021-b8f84bc93bf8_rw_3840.jpg?h=e19a2da6a109ce6dc3a17cb9858d1190",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/762bb075-175a-4221-99d3-9dc3a49a8ea5_rw_1920.jpg?h=f1d516fe06b6f65fb749c30aa5406436"
    ],
    videos: []
  },

  {
    slug: "mc-cabelinho",
    name: "MC Cabelinho",
    category: "music",
    year: "2026",
    role: "Live Show Coverage",
    blurb: "Live show coverage of MC Cabelinho's performance at Caxias Festival, a major music festival in Duque de Caxias.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/74ade771-cdd5-4051-81a8-f82a13bd4480_rw_1920.jpg?h=1914aefb428f1bab8224ff1614c65ca2",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6e858e7a-9b75-4601-8585-7efbb0499064_rw_1920.jpg?h=4ace5ee45f7f4a3fcc5f3787106ff895",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0539eec2-8751-4c3e-9d69-f89ce2b9050a_rw_1920.jpg?h=2e3f69e494942934f6a7d0d093e5bbf7",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/957b88f1-204c-4345-876f-bb583176ec63_rw_1920.jpg?h=ba905e3e8d6fa35b46b0ce33d3d22559",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ca9d38b8-e5cf-4c39-bf8c-8f64d2a66a00_rw_1920.jpg?h=f9ce77678349e1dcfae263b82302b99a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/2a78b33b-82c5-491c-b28d-7f16759aee00_rw_3840.jpg?h=bce13be93c102ab1c92c04f4fbd47c8f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/92b76010-a35e-4c0b-a7e4-f5eefdcf327d_rw_3840.jpg?h=4b463f49db93ac044f593c86a9196b85",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/84babf52-4ae1-46ba-bcbc-1cead8cf5b42_rw_3840.jpg?h=9ef86113264d2ec95f545381f57f2f41",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0d19332a-30c7-4016-9e27-50889f183aa4_rw_3840.jpg?h=25581b73ce48b4b2d432715912900d3f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b81f4678-76d1-4c8f-a1bf-786312d9c745_rw_1920.jpg?h=7c8de02a01fe6431cf062791a9595eee"
    ],
    videos: []
  },

  {
    slug: "festival-eita",
    name: "Festival EITA",
    category: "music",
    year: "2026",
    role: "Festival Coverage",
    blurb: "Coverage of Festival EITA, a large themed music-and-food festival.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5e4ca448-4f23-47bd-9647-6560b44ca61b_rw_3840.jpg?h=ea802f5260b45f340363380a181ab612",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/03245118-426a-45b5-9773-7e8ba0c26740_rw_3840.jpg?h=ef8774afb22b6d547c5edc841f98e3c3",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4d9466e3-b8a1-47da-ba2b-f5b1fe7dc4aa_rw_3840.jpg?h=c08d297cd5ac92c1d5b17ec5628ae6c8",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1b9dea98-f749-4f2b-8add-130d1176bd51_rw_1920.jpg?h=4fec43ddd1119fab90289a6393d55d9d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/326f2e81-718e-4727-bdd8-bd62bbd2dafa_rw_1920.jpg?h=b653def2396ce63980e31aa68c7166e2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/da3535d7-8726-4bbc-abe2-f3a831884efe_rw_3840.jpg?h=8a67f119f61a9240398939fb01d7f453",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ac910dee-5a9c-488d-b24a-4fbbc9ae269a_rw_3840.JPG?h=3743c2a6980404200cb2d2c7c67d660f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/418dda39-0f92-42ac-ae91-36dafc7cd1b3_rw_3840.JPG?h=de24225f1e85f4bca86cfe29c0b78bc2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4955befb-98ec-45e2-b696-5d4128e2a3f2_rw_3840.jpg?h=bb06dbce45781ec376e6c38784cca9f7",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9db816c7-d8f0-433e-aa01-48d7fe6cf31c_rw_3840.jpg?h=87c4c332cde46ab64d47a207dee04ba9",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d1950d62-dc3c-432c-a1b6-2109e52447e8_rw_3840.jpg?h=f4a92b5d3b088449fd8c6125e0537897",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/dd56d103-5893-4b08-8273-2503a7228886_rw_1920.jpg?h=7989bb4f0b9f64fb5a92da80c754c6e8",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/499581b7-ccc9-4fcc-9e10-2222e122ee85_rw_3840.jpg?h=89102463a8bfd26805c15eb22487cbc5",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/167529f6-9285-4b86-8615-cea490731d6d_rw_3840.JPG?h=62b4dfa98c64946935d15753790d1f63"
    ],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/UcUDiAmS9x8/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/4m58B6oAdpH/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/8pLTXfLvXij/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  {
    slug: "natal-music-iva-guimaraes",
    name: "Natal Music — Iva Guimarães",
    category: "brand",
    year: "2026",
    role: "Music Video Production",
    blurb: "Produced a Christmas gospel music video for Iva Guimarães' “Natal Music” project.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/da4f2d5f-f495-495e-bb8e-ac04138d2196_rw_1920.jpg?h=500016f997cf66727c779ea9f0aca387",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/9e69a3c5-c177-4e0d-b70a-32705effee62_rw_1920.jpg?h=e54d53badf10be1f795fb6a81c91e8e7",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/16555787-dc61-443a-aa78-3023c3c4b181_rw_1920.jpg?h=3828168552f951786ac670f8316cadb4",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/19ead311-afb5-4538-a853-dc9a59443bdf_rw_3840.jpg?h=7500fc112520c680b968fabbcef30a32"
    ],
    videos: []
  },

  {
    slug: "belo",
    name: "Belo",
    category: "music",
    year: "2026",
    role: "Live Show Coverage",
    blurb: "Live show coverage of Belo's performance at Caxias Festival, a major music festival in Duque de Caxias.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/696127f8-0838-44bc-9ae4-eca32ca24b5b_rw_3840.jpg?h=4592a8e03fd456381195e96f7ad80a5d",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4bf5c336-4d15-4461-b7dd-b30ba0c2d92f_rw_1920.jpg?h=a84e49bbf613b2a3ac524ab5511e3f6a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/62293477-105d-482f-810e-b63d514191b9_rw_3840.jpg?h=097d38021882a47b3212f4c80c17fb52",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/28a6c64b-731d-465e-8b68-71e6edbfca16_rw_3840.jpg?h=12fd90d96b61b4ce003da4fbc76c9654",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a120415e-7b5a-4fd9-b3d0-ed5c18b1efb6_rw_3840.jpg?h=754013336b0492a2cf2c0cf73df85978",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3c494a00-5206-419c-a492-82fd792fc9e4_rw_3840.jpg?h=832688045c215b11190024ddf1c4bae9",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/8772db41-2b7b-476d-882a-90f47849b298_rw_3840.jpg?h=8702969eb8cc9b034efaca461cd1331f",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3b48c930-2c4a-479c-81c0-6c98050a148f_rw_3840.jpg?h=7af8d3b120936e1597073ba57d1aa7ed",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6eb499d9-31ea-4153-9b7b-fa52c5b75446_rw_3840.jpg?h=7354bae25e30207e9200d4c646b2743c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/18f5cd7d-98d3-4239-ad85-a0319124c84d_rw_3840.jpg?h=a6e2a9d5956d265f37ba7de9347bc710",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/fe2da4a4-bd04-4c72-b497-623ca8a4f47f_rw_3840.jpg?h=74099f2a0171ae113fa58da3e168a2db",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c721c82a-2f3d-4f52-a15c-b4e409adf6ce_rw_3840.jpg?h=2dad94e3e6e325e7baebcc55c83454a5",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3a81dfef-6593-4fc9-aa29-71585b5e7a02_rw_3840.jpg?h=3ce52fb442fe5f520c9d3d8592cf5d5c"
    ],
    videos: []
  },

  {
    slug: "isim-fire",
    name: "Isim Fire",
    category: "brand",
    year: "2026",
    role: "Video Coverage",
    blurb: "Video coverage for Isim Fire, produced in partnership with Engenheiro Criativo.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/8847d2f0-9f31-4f96-995b-0a8064251519_rwc_0x269x1290x1718x1290.jpg?h=a86f44009f9b222155bb63872c851904",
    images: [],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/9IC8DyWXZMP/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/H9fJvmSUjQC/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  // ---------- EVENTS & PERSONAL ----------
  {
    slug: "ufrj",
    name: "UFRJ",
    category: "events",
    year: "2026",
    role: "White Coat Ceremony Coverage",
    blurb: "Covered the white coat ceremony (“cerimônia do jaleco”) for medicine students at UFRJ.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5b7b8cfa-a11a-4947-ae0a-8ca2d7577f7c_rw_1920.jpg?h=4b9262437155f7ef6397a7b48cf11fa4",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3f179259-c15b-4090-8503-5dfa296c3628_rw_3840.jpg?h=3c8f250d67b8fd2ab74a53ef170a1fed",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5d42148f-cbeb-4052-b10a-10d420c36b39_rw_1920.jpg?h=a2931819c3362299aa9e2954110382e7",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f549ce94-ebe6-4925-8d83-c9eccf4a0b24_rw_3840.jpg?h=b96f499fd5a8ea6704280305cde1e538",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/dade8311-052f-4164-bc7f-6f8dc2174c99_rw_3840.jpg?h=9aaa1a80358dd545d9a3f4a8d82ea04e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/eecab32a-965f-4c43-9cc5-83bf759c9834_rw_3840.jpg?h=9475582527a9eb9ac9f4d7a0ca541830",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/dd1072d7-160e-491d-8c16-2abcbdb904b2_rw_1920.jpg?h=2c364a7ee3210add159fab273c19c88d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3264cab3-710b-46d9-bf7a-1e7407cbec26_rw_3840.jpg?h=d9436e6c396617837bfdd5f8daa65ed5",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/770ec769-ffcf-44f6-b57b-5665b7da68f8_rw_3840.jpg?h=c472e44c5d1613088916b11f2d6b9d14",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d737c566-6129-407d-8874-e12e0e8c31e5_rw_3840.jpg?h=d7ada70e8276820a27379314fa7fb129",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4a92fed4-dc25-482a-934a-387d788c9f77_rw_1920.jpg?h=cdd561a6e0b242751b129863901703d0",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/20aee57f-26ec-4710-85f3-89925d416d23_rw_3840.jpg?h=1f2c9e493e3a7afe5bdcc838204291f3",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/23eb9078-deae-4b7b-98b0-62d5dfa01405_rw_3840.jpg?h=96ca7666822827b7e9186d9a88cf1af8",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f0a0d27a-334e-4f41-a42f-23a00cfa69a9_rw_3840.jpg?h=4608d79c91ef78b5cecac4cd4b065e1b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0fca867e-c923-42ba-ba54-fe28876bfad0_rw_3840.jpg?h=3d8e857492cf1c0e8c9d71e1bd0ddcc2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6381187c-1cfe-4a3d-becd-d90f50b81d6c_rw_1920.jpg?h=2aac44868975b679f6bf75c292bdb7ff",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/44db4b7d-da2e-4dc3-be43-49dd6340cc6f_rw_3840.jpg?h=4353eedd5c86fc4f928682f5113403c8",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/525145ad-465f-447b-b4f0-5157d3ecdde2_rw_3840.jpg?h=8c9f4e5b8b0d354af67e85f3ce34c3a4",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/717934f3-c54d-4897-a6eb-8b1a5ce4fcfb_rw_1920.jpg?h=0642061f44f3a98977865d98a486881a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/be38bafb-e477-4286-b6f5-a6dfef58ee5c_rw_3840.jpg?h=194c9e4d79bbfcba89ccd90b5e77cf69",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c5515dd1-ca33-40b8-8072-0528b34dfc07_rw_3840.jpg?h=5ef1890d054cd36ea6589153b0742c43",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ce99693f-2a1c-448c-8f14-eeca27350824_rw_1920.jpg?h=231be8661653bd4fa5ec4e7fda09a9ae",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/7128c653-67ff-41c8-b126-123379f2c01d_rw_3840.jpg?h=c10d0fcf20f33c05a89a36185c779b5d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/44a44f62-3a54-4e93-8739-09bf957133f1_rw_3840.jpg?h=836d6bfe730615415adbf50ec6255201",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6b0a250a-b57f-4959-b57e-0ef684c0b240_rw_3840.jpg?h=dc37d85eceb59ab55dfc6d1ee8d24122",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4270fd14-ab5b-4934-abe9-526da74fdfe0_rw_3840.jpg?h=d0b7da21de60579540b773131d9e23ec",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ac26c398-6ce6-4d23-8f26-77b83e2d631e_rw_3840.jpg?h=dd33d0ca20ec97776d228f69acd63619",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1399fd63-ea05-44e1-bd0b-407517ee3e24_rw_1920.jpg?h=cdd0a91819bb9a1d202ff30372d48c6a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/567fca48-01f9-4286-9513-31d784846f34_rw_1920.jpg?h=2b4b6f7425b21c0d5c27ee82ed041d8a"
    ],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/5tFSv3tdWX3/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  {
    slug: "casamento-daniel-mafe",
    name: "Casamento Daniel & Mafe",
    category: "events",
    year: "2026",
    role: "Wedding Coverage — Team Production",
    blurb: "Full wedding coverage for Daniel & Mafe, produced and delivered by my team at Scope Studios.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/435f7449-84d9-4b70-853e-31f6eb620863_rw_3840.jpg?h=23ac4a42f735789b680e967da479b122",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0bcf9190-0e1f-4dca-b524-130c875509e5_rw_3840.jpg?h=a6fce2794180a80d1c2401758289eba2",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/d547fa64-a9b3-4a82-8ebc-f64dfc641574_rw_3840.jpg?h=e6df2bbfd53fea6ccf983457d88a7597",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/cd68d59b-84fc-4172-998a-115c47ccbae0_rw_3840.jpg?h=f13effa294870fcfc73288572da9b7a1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3845afb6-eb54-4c84-a6fc-c83ef085ad2d_rw_3840.jpg?h=2de6848d672b3aa6e3e5fa8e1a0c3e92",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/36c881e9-f354-4c56-9aa7-d6c027008d01_rw_3840.jpg?h=a23ea1254e70864df0f9a09d49fa7bab",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4ab7a2f5-881a-4688-941a-560273d15ab9_rw_1920.jpg?h=bd357be210e671418395d79f838343ff",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/35acd24a-4606-42b7-9437-7d24da75438a_rw_3840.jpg?h=825ca3a6fbe7338618b5d0f3d5b92c40",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e338aa28-9a52-454c-9082-c3cfaea05201_rw_3840.jpg?h=0887fe1d38da9dad5dcf7d6c58ff5e36",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0169257a-b625-4ff3-91fc-1e518e71dea8_rw_3840.jpg?h=8eb03b99caefaf0d16f7f5ae6f02aac3",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c33ee2f1-29e7-4b0b-b449-1cdad0778497_rw_1920.jpg?h=454d883261dcc905f352ab5f3b8fe64a",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/55a557c2-9025-4962-8e43-876f9a10bf4f_rw_3840.jpg?h=a5e381ab188cfc820348122794e727951",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/eb5c5423-f9c2-4473-a3dc-e1967ccfc8be_rw_3840.jpg?h=d5cdf7e86ff001ef7a4c5aac892dea90",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c972ae42-f51b-4445-9c65-762c465cbe91_rw_3840.jpg?h=3120668086535f4da1446378e0e1710d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/cd48566f-970d-46fd-8f06-ab39041dba37_rw_3840.jpg?h=8e62edaba2f8c6f41b44c2cc84a5e132",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ff72c941-1ffd-46ef-b1ab-02a4d2406889_rw_3840.jpg?h=c96568095428dce4e6401f9425f5da10",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/fbd55d24-8ee2-4e18-be2a-04c259588d3d_rw_3840.jpg?h=a1bba1ba0969afd7c88397227f39343d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f7893a14-dc31-4978-bda3-d6ccb6ee0c09_rw_3840.jpg?h=f95fc437639504a3dba051744302507b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/11245fea-7708-4c19-acb3-e1e565483aea_rw_3840.jpg?h=ece6634b16871d9f5cdcbf6fb867228d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/558e38de-eb7d-44c0-a27d-7e122b24401f_rw_3840.jpg?h=db8bb717aa230d8bf810a25b0cc6de63",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/74a18eb4-a988-4bc5-93fb-23735d576c74_rw_1920.jpg?h=f10030f4020e9c05b8044517b3ed688c",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/6e0edba2-b080-4081-a96b-2c1a0867442b_rw_3840.jpg?h=f5d8b53959a2748a4168e6a8cf1e19b6",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f01d5dfd-a9bb-4e78-af70-c2cef5183c4c_rw_3840.jpg?h=e2197accf69f15e3e6e6964f9e3fe11d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/8861f0cd-8013-4866-821d-91e1dfa813c2_rw_1920.jpg?h=c0c4a6fc95b8d4b0d37d8b30f217e97b",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b36ea054-c192-4060-b3c6-bbcb6a59297b_rw_1920.jpg?h=c459247ed96ae929f89bd224f12196c6",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ae4faa1c-6abb-4cd3-b47e-bfb94fa2e0b5_rw_3840.jpg?h=bfd46c8d493d4001b8e040f5b4286291",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3f117c62-9124-4597-8a24-04fb41500b7c_rw_1920.jpg?h=966d9e19cdeff66494488e7f04e9b7fb",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/0fc90b4e-cbea-40d5-8ade-ccc1a8c2a584_rw_3840.jpg?h=aae12d4e2a43bf857d15d67d88202746",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f825d59a-28af-4e84-8f1c-d06b871ed8d5_rw_3840.jpg?h=d1ed594faf385a77c8b2ef89f4c2ced0"
    ],
    videos: [
      "https://www-ccv.adobe.io/v1/player/ccv/SuiSzjvxUHw/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View",
      "https://www-ccv.adobe.io/v1/player/ccv/L2WnhFR27cm/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
    ]
  },

  {
    slug: "food-geral",
    name: "Food",
    category: "brand",
    year: "2026",
    role: "Personal Food Photography Portfolio",
    blurb: "A general food photography portfolio showcasing restaurant and dish photography across multiple projects.",
    cover: "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/8aa0563e-9739-41bb-b1d8-910e63624e9e_rw_3840.jpeg?h=cb46ace2d6eb4e0138b2453c57675cde",
    images: [
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/3512362c-bdc4-4d5f-bece-f6fbb76c2a4c_rw_1920.jpeg?h=398bfd35d2e222848f7db34c83f59d5d",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b1a2e3f2-9004-4808-9b47-b2ebb8333ef5_rw_3840.jpg?h=bfa2741c9104f111900e40bc59d17a69",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ea54a730-f71e-4e4b-a414-317d07e9b203_rw_1920.jpeg?h=fff290e07df710b7a9f559e3548f51c5",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/4fc4fd8a-d820-4c97-abc0-232da224bd8b_rw_3840.jpeg?h=3611e49ef8d459d111557648ef47ac14",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/732a6994-d7d8-4148-ba41-a74e912a8203_rw_1920.jpeg?h=181ac4a55bb0a0ef9d2e37189a8f9134",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/e11f1418-fa72-43ee-85a6-dda15b1d4588_rw_3840.jpeg?h=be85123af70b400c59f1e9091e82d031",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/a19ea048-8ed4-4b84-a3fd-e931c7a1ec99_rw_3840.jpeg?h=1834829749886168e12b805eb09830e7",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b00487b3-0778-420c-b1ff-a04e3440b4d4_rw_1920.jpeg?h=8ab1bf935dd23f6b32b23211bcd7d9c6",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/60fe8fac-964b-4f77-98fa-c0fe96bc9101_rw_1920.jpeg?h=cc18b9c665fd81afa122cdb27ea24082",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b5238e7d-f758-4288-9c7e-adf8c1319972_rw_1920.jpeg?h=c707ab2aa73c5dd1e8c3f65814724bc3",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b6f10bb6-293c-476e-9e31-d8fc65808712_rw_1920.jpeg?h=a779d584479daa61b855d5f08fc6c3b7",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/c5205560-5e0f-4a9f-9c69-70ed09245ce2_rw_1920.jpeg?h=c288b81dac2469e1ed1c72ff9615b017",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1e868ddf-5613-446c-934e-d568a0d269e0_rw_3840.jpeg?h=6ca39a1dbdc70e90d6aff3992ae130c9",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/1f6a7a65-aca9-4e45-9280-12f90a8a1f8c_rw_3840.jpeg?h=5ab775a18a230e57f460f15c5a07dc43",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/b924a797-c7e2-4c9b-baa7-34883babef21_rw_3840.jpeg?h=14a6878c5e87abee3006dfae0f409fe1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/054ffb7e-0a42-45cd-8355-da1b5c2132e7_rw_3840.jpg?h=de6c5c008878820134b49b21b24c4119",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/cef7870d-74a2-462c-83d7-0716b77e307d_rw_3840.jpeg?h=c037df238a1f4fdbe3d4d9bcfb32a741",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/666dbac3-4327-4ded-828f-3b0be2f45524_rw_1920.jpeg?h=b8bc0dd8d8b7ac99664d1511b6120a90",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/bd88ec19-0124-40bf-b605-1b0cf3216d5a_rw_1920.jpeg?h=ac71d9d147a97c000eedb448b6022b7e",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/87e4957a-0313-420c-9bbb-445f42e2cab4_rw_1920.jpeg?h=052c8b9a315ce91e9c722c0d1c8f0443",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/87d02cb7-557c-454d-ae08-1e03361e9c64_rw_3840.jpg?h=464ed7201f59ada28dffd8f7e1fbb551",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/ac78abf5-6e25-4290-b29c-ca5bc90112e8_rw_1920.jpeg?h=286bb65cb36ba28c841541f1e46d63f1",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/80eb0e3b-120b-4409-bdb7-d667588f979d_rw_3840.jpeg?h=48660ab9f5c77db0bb773243a768eb89",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/532b5bb5-a78a-4f09-8d2b-4c69f8fb9bdd_rw_1920.jpeg?h=07c023b250ae365b923a74685d7def90",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/5712410f-0b5a-4ebc-8e7f-e755a66de3fc_rw_1920.jpeg?h=aa1ec3ab20a91f6cee43a7c29df7a6ec",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/f882a251-3c60-4503-b65f-a675bbd02024_rw_1920.jpeg?h=770ad4d3936cd7ca4e605524da830618",
      "https://cdn.myportfolio.com/fc877935-81cc-4b45-a415-0a8d1e2c9504/aea4deb2-3635-40b4-8887-7251f938c311_rw_1920.jpeg?h=c97a4ae6b6adba7a1c7ceb80503053a0"
    ],
    videos: []
  }

];
