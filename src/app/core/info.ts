export class Info {

    /**
     *
     */
    constructor(schema: string = '', name: string = '', fullName: string = '', url: string = '') {
        this.name = name;
        this.schema = schema;
        this.fullName = fullName;
        this.url = (url.length == 0 ? `${schema.toLowerCase()}/${name.toLowerCase()}` : url.toLowerCase());
    }

    schema: string;
    name: string;
    fullName: string;
    title: string = '';
    url: string = 'schema/name';
}

