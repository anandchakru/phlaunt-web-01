import { Album } from "./AlbumSlice";

export function fetchAlbum(offset = 0, limit = 10) {
  return new Promise<{ offset: number, limit: number, more: boolean, data: Album[] }>((resolve) =>
    setTimeout(() => resolve({
      offset, limit, more: offset == 0 ? true : false, data: offset == 0 ? [{
        id: '1',
        title: "Album 1",
        description: "This is album 1",
        owner: "Phlaunt",
        created: "2020-01-01",
        thumbnail: "https://images.unsplash.com/photo-1644358731342-2d83c9c8a474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
        images: [{
          id: '1',
          title: "Image 1",
          url: "https://images.unsplash.com/photo-1644358731342-2d83c9c8a474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
          thumbnail: "https://images.unsplash.com/photo-1644358731342-2d83c9c8a474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          tags: ["tag1", "tag2"],
        }],
        published: true,
        tags: ["tag1", "tag2"],
      },
      {
        id: '2',
        title: "Album 2",
        description: "This is album 2",
        owner: "Phlaunt",
        created: "2020-01-01",
        thumbnail: "https://images.unsplash.com/photo-1643932696437-c5747e988b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
        images: [{
          id: '1',
          title: "Image 1",
          url: "https://images.unsplash.com/photo-1643932696437-c5747e988b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          thumbnail: "https://images.unsplash.com/photo-1643932696437-c5747e988b5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          tags: ["tag1", "tag2"],
        }],
        published: true,
        tags: ["tag1", "tag2"],
      }, {
        id: '3',
        title: "Album 3",
        owner: "Phlaunt",
        created: "2020-01-01",
        thumbnail: "https://images.unsplash.com/photo-1527685609591-44b0aef2400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
        images: [{
          id: '1',
          title: "Image 1",
          url: "https://images.unsplash.com/photo-1527685609591-44b0aef2400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1933&q=80",
          thumbnail: "https://images.unsplash.com/photo-1527685609591-44b0aef2400b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          tags: ["tag1", "tag2"],
        }],
        published: true,
        tags: ["tag1", "tag2"],
      }, {
        id: '4',
        title: "Album 4",
        owner: "Phlaunt",
        created: "2020-01-01",
        thumbnail: "https://images.unsplash.com/photo-1643649233836-df79b8448513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
        images: [{
          id: '1',
          title: "Image 1",
          url: "https://images.unsplash.com/photo-1643649233836-df79b8448513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
          thumbnail: "https://images.unsplash.com/photo-1643649233836-df79b8448513?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          tags: ["tag1", "tag2"],
        }],
        published: true,
        tags: ["tag1", "tag2"],
      }, {
        id: '5',
        title: "Album 5",
        owner: "Phlaunt",
        created: "2020-01-01",
        thumbnail: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
        images: [{
          id: '1',
          title: "Image 1",
          url: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
          thumbnail: "https://images.unsplash.com/photo-1611601679655-7c8bc197f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          tags: ["tag1", "tag2"],
        }],
        published: true,
        tags: ["tag1", "tag2"],
      }, {
        id: '6',
        title: "Album 6",
        owner: "Phlaunt",
        created: "2020-01-01",
        thumbnail: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
        images: [{
          id: '1',
          title: "Image 1",
          url: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
          thumbnail: "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          tags: ["tag1", "tag2"],
        }],
        published: true,
        tags: ["tag1", "tag2"],
      }, {
        id: '7',
        title: "Album 7",
        owner: "Phlaunt",
        created: "2020-01-01",
        thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
        images: [{
          id: '1',
          title: "Image 1",
          url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
          thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          tags: ["tag1", "tag2"],
        }],
        published: true,
        tags: ["tag1", "tag2"],
      }, {
        id: '8',
        title: "Album 8",
        owner: "Phlaunt",
        created: "2020-01-01",
        thumbnail: "https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
        images: [{
          id: '1',
          title: "Image 1",
          url: "https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80",
          thumbnail: "https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          tags: ["tag1", "tag2"],
        }],
        published: true,
        tags: ["tag1", "tag2"],
      }, {
        id: '9',
        title: "Album 9",
        owner: "Phlaunt",
        created: "2020-01-01",
        thumbnail: "https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
        images: [{
          id: '1',
          title: "Image 1",
          url: "https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          thumbnail: "https://images.unsplash.com/flagged/photo-1571837360114-edf5dba7b1dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          tags: ["tag1", "tag2"],
        }],
        published: true,
        tags: ["tag1", "tag2"],
      }, {
        id: '10',
        title: "Album 10",
        owner: "Phlaunt",
        created: "2020-01-01",
        thumbnail: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
        images: [{
          id: '1',
          title: "Image 1",
          url: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          thumbnail: "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          tags: ["tag1", "tag2"],
        }],
        published: true,
        tags: ["tag1", "tag2"],
      }] : [
        {
          id: '11',
          title: "Album 11",
          owner: "Phlaunt",
          created: "2020-01-01",
          thumbnail: "https://images.unsplash.com/photo-1630567804048-96a2ea2c2f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          images: [{
            id: '1',
            title: "Image 1",
            url: "https://images.unsplash.com/photo-1630567804048-96a2ea2c2f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            thumbnail: "https://images.unsplash.com/photo-1630567804048-96a2ea2c2f83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            tags: ["tag1", "tag2"],
          }],
          published: true,
          tags: ["tag1", "tag2"],
        },
        {
          id: '12',
          title: "Album 12",
          owner: "Phlaunt",
          created: "2020-01-01",
          thumbnail: "https://images.unsplash.com/photo-1517530094915-500495b15ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          images: [{
            id: '1',
            title: "Image 1",
            url: "https://images.unsplash.com/photo-1517530094915-500495b15ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            thumbnail: "https://images.unsplash.com/photo-1517530094915-500495b15ade?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            tags: ["tag1", "tag2"],
          }],
          published: true,
          tags: ["tag1", "tag2"],
        },
        {
          id: '13',
          title: "Album 13",
          owner: "Phlaunt",
          created: "2020-01-01",
          thumbnail: "https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          images: [{
            id: '1',
            title: "Image 1",
            url: "https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            thumbnail: "https://images.unsplash.com/photo-1618721405821-80ebc4b63d26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            tags: ["tag1", "tag2"],
          }],
          published: true,
          tags: ["tag1", "tag2"],
        },
        {
          id: '14',
          title: "Album 14",
          owner: "Phlaunt",
          created: "2020-01-01",
          thumbnail: "https://images.unsplash.com/photo-1587944308214-cb558d66cfe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          images: [{
            id: '1',
            title: "Image 1",
            url: "https://images.unsplash.com/photo-1587944308214-cb558d66cfe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=705&q=80",
            thumbnail: "https://images.unsplash.com/photo-1587944308214-cb558d66cfe6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            tags: ["tag1", "tag2"],
          }],
          published: true,
          tags: ["tag1", "tag2"],
        },
        {
          id: '15',
          title: "Album 15",
          owner: "Phlaunt",
          created: "2020-01-01",
          thumbnail: "https://images.unsplash.com/photo-1519282407670-6e0ace7ffc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          images: [{
            id: '1',
            title: "Image 1",
            url: "https://images.unsplash.com/photo-1519282407670-6e0ace7ffc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
            thumbnail: "https://images.unsplash.com/photo-1519282407670-6e0ace7ffc96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            tags: ["tag1", "tag2"],
          }],
          published: true,
          tags: ["tag1", "tag2"],
        },
        {
          id: '16',
          title: "Album 16",
          owner: "Phlaunt",
          created: "2020-01-01",
          thumbnail: "https://images.unsplash.com/photo-1588731222899-68315ddd5e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          images: [{
            id: '1',
            title: "Image 1",
            url: "https://images.unsplash.com/photo-1588731222899-68315ddd5e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            thumbnail: "https://images.unsplash.com/photo-1588731222899-68315ddd5e8e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            tags: ["tag1", "tag2"],
          }],
          published: true,
          tags: ["tag1", "tag2"],
        },
        {
          id: '17',
          title: "Album 17",
          owner: "Phlaunt",
          created: "2020-01-01",
          thumbnail: "https://images.unsplash.com/photo-1572460418264-695212ed493a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          images: [{
            id: '1',
            title: "Image 1",
            url: "https://images.unsplash.com/photo-1572460418264-695212ed493a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
            thumbnail: "https://images.unsplash.com/photo-1572460418264-695212ed493a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            tags: ["tag1", "tag2"],
          }],
          published: true,
          tags: ["tag1", "tag2"],
        },
        {
          id: '18',
          title: "Album 18",
          owner: "Phlaunt",
          created: "2020-01-01",
          thumbnail: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
          images: [{
            id: '1',
            title: "Image 1",
            url: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            thumbnail: "https://images.unsplash.com/photo-1552642986-ccb41e7059e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80",
            tags: ["tag1", "tag2"],
          }],
          published: true,
          tags: ["tag1", "tag2"],
        }
      ]
    }), 500)
  )
}