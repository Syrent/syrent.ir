import PocketBase from 'pocketbase';

export const database = new PocketBase('http://127.0.0.1:8090')

export async function login(user: string, password: string): Promise<boolean> {
    const authData = await database.collection('users').authWithPassword(user, password)

    // after the above you can also access the auth data from the authStore
    console.log(database.authStore.isValid);
    console.log(database.authStore.token);
    console.log(database.authStore.model?.id);

    return database.authStore.isValid
}