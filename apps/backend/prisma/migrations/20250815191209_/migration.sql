-- AlterTable
CREATE SEQUENCE chat_id_seq;
ALTER TABLE "Chat" ALTER COLUMN "id" SET DEFAULT nextval('chat_id_seq');
ALTER SEQUENCE chat_id_seq OWNED BY "Chat"."id";
