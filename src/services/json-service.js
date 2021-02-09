export default class JsonService {
  _apiBase = "https://jsonplaceholder.typicode.com";

  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);

    if (!res.ok) {
      throw new Error(`Could not fetch ${url} , received ${res.status}`);
    }
    return await res.json();
  }

  async getAllUsers() {
    const res = await this.getResource(`/users/`);
    return res.map(this._transformUser);
  }

  async getAllPosts() {
    const res = await this.getResource(`/posts/`);
    return res.map(this._transformPost);
  }

  async getAllAlbums() {
    const res = await this.getResource(`/albums/`);
    return res.map(this._transformAlbum);
  }

  async getAllPhotos() {
    const res = await this.getResource(`/photos`);
    return res.map(this._transformPhoto);
  }

  async getUser(id) {
    const user = await this.getResource(`/users/${id}/`);
    return this._transformUser(user);
  }

  _transformUser(user) {
    return {
      id: user.id,
      name: user.name,
      username: user.username,
      email: user.email,
      address: user.address,
      phone: user.phone,
      website: user.website,
      company: user.company,
    };
  }

  _transformPost(post) {
    return {
      id: post.id,
      userId: post.userId,
      title: post.title,
      body: post.body
    };
  }

  _transformAlbum(album) {
    return {
      id: album.id,
      userId: album.userId,
      title: album.title,
    };
  }

  _transformPhoto(photo) {
    return {
      id: photo.id,
      albumId: photo.albumId,
      title: photo.title,
      url: photo.url,
      thumbnailUrl: photo.thumbnailUrl,
    };
  }
}