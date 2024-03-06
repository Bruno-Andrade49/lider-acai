const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
    try {
        const productData = [
            {
                name: "Açaí 250ml",
                description: "Descrição do Produto 1",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 250ml",
                description: "Descrição do Produto 1",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 250ml",
                description: "Descrição do Produto 1",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 250ml",
                description: "Descrição do Produto 1",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 250ml",
                description: "Descrição do Produto 1",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 250ml",
                description: "Descrição do Produto 1",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 250ml",
                description: "Descrição do Produto 1",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 250ml",
                description: "Descrição do Produto 1",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 250ml",
                description: "Descrição do Produto 1",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 250ml",
                description: "Descrição do Produto 1",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 250ml",
                description: "Descrição do Produto 1",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 250ml",
                description: "Descrição do Produto 1",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:1200x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2023/r/5/1uLFlxT928PSYtPvH9Fg/acai-beneficios.jpg",
            },
        ];

        // Criar produtos usando os dados fornecidos
        for (const data of productData) {
            await prisma.product.create({
                data: {
                    name: data.name,
                    description: data.description,
                    imageUrl: data.imageUrl,
                },
            });
        }

        // Fechar a conexão com o banco de dados
        await prisma.$disconnect();
    } catch (error) {
        console.error("Erro ao criar os produtos:", error);
    }
}

seedDatabase();
