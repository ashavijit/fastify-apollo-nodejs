import fp from 'fastify-plugin';
import mongoose from 'mongoose';
import Post from '../models/post';
const models = { Post };

const connect = async ( fastify , options ) => {
    try {
        mongoose.connection.on('connected', () => {
            fastify.log.info('MongoDB connected');
        });
        mongoose.connection.on('disconnected', () => {
            fastify.log.info('MongoDB disconnected');
        });
        const db = await mongoose.connect(options.uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
        });
        fastify.decorate('mongo', { db, models });
    } catch (err) {
        fastify.log.error(err);
    }
}

export default fp(connect);

