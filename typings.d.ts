interface SanityBody {
    _createdAt: string;
    _id: string;
    _rev: string;
    _updatedAt: string
}

interface Image {
    _type: "image";
    asset: {
        _ref: "string"
        _type: "reference"
    }
}

export interface    pageInfo extends SanityBody {
    _type: "pageInfo";
    backgroundInformation: string;
    email: string
    heroImage: Image;
    name: string;
    phoneNumber: string;
    role: string
}

export interface Skill extends SanityBody {
    _type: "skill";
    efficiency: string;
    image: Image;
    name: string;
    title: string
}

export interface Social extends SanityBody {
    _type: "Social";
    title: string;
    url: string
}