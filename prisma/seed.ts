const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
    try {
        const productData = [
            {
                name: "Açaí 350ml",
                description: "Descrição do Produto 2",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:2300x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v2/AUTH_2f540e0b94d8437dbbc39d567a2dee68/internal_photos/bs/3033/r/5/2uLFlxT938PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 350ml",
                description: "Descrição do Produto 2",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:2300x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v2/AUTH_2f540e0b94d8437dbbc39d567a2dee68/internal_photos/bs/3033/r/5/2uLFlxT938PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 350ml",
                description: "Descrição do Produto 2",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:2300x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v2/AUTH_2f540e0b94d8437dbbc39d567a2dee68/internal_photos/bs/3033/r/5/2uLFlxT938PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 350ml",
                description: "Descrição do Produto 2",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:2300x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v2/AUTH_2f540e0b94d8437dbbc39d567a2dee68/internal_photos/bs/3033/r/5/2uLFlxT938PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 350ml",
                description: "Descrição do Produto 2",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:2300x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v2/AUTH_2f540e0b94d8437dbbc39d567a2dee68/internal_photos/bs/3033/r/5/2uLFlxT938PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 350ml",
                description: "Descrição do Produto 2",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:2300x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v2/AUTH_2f540e0b94d8437dbbc39d567a2dee68/internal_photos/bs/3033/r/5/2uLFlxT938PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 350ml",
                description: "Descrição do Produto 2",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:2300x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v2/AUTH_2f540e0b94d8437dbbc39d567a2dee68/internal_photos/bs/3033/r/5/2uLFlxT938PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 350ml",
                description: "Descrição do Produto 2",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:2300x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v2/AUTH_2f540e0b94d8437dbbc39d567a2dee68/internal_photos/bs/3033/r/5/2uLFlxT938PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 350ml",
                description: "Descrição do Produto 2",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:2300x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v2/AUTH_2f540e0b94d8437dbbc39d567a2dee68/internal_photos/bs/3033/r/5/2uLFlxT938PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 350ml",
                description: "Descrição do Produto 2",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:2300x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v2/AUTH_2f540e0b94d8437dbbc39d567a2dee68/internal_photos/bs/3033/r/5/2uLFlxT938PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 350ml",
                description: "Descrição do Produto 2",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:2300x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v2/AUTH_2f540e0b94d8437dbbc39d567a2dee68/internal_photos/bs/3033/r/5/2uLFlxT938PSYtPvH9Fg/acai-beneficios.jpg",
            },
            {
                name: "Açaí 350ml",
                description: "Descrição do Produto 2",
                imageUrl: "https://s2-receitas.glbimg.com/vPur4NCE_E-plaFDv5YRKYzr8UU=/0x0:2300x798/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v2/AUTH_2f540e0b94d8437dbbc39d567a2dee68/internal_photos/bs/3033/r/5/2uLFlxT938PSYtPvH9Fg/acai-beneficios.jpg",
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

        const ingredientsData = [
            {
                "name": "Açaí Tradicional",
                "step": "2"
            },
            {
                "name": "Açaí C/ Morango",
                "step": "2"
            },
            {
                "name": "Açaí C/ Whey Protein",
                "step": "2"
            },
            {
                "name": "Cupuaçu",
                "step": "2"
            },
            {
                "name": "Creme de Ninho com Nutella",
                "step": "2"
            },
            {
                "name": "Creme de Morango",
                "step": "2"
            },
            {
                "name": "Creme de Ovomaltine",
                "step": "2"
            },
            {
                "name": "Creme de Maracujá",
                "step": "2"
            },
            {
                "name": "Creme de Chocobis laka",
                "step": "2"
            },
            {
                "name": "Creme de Café com Leite",
                "step": "2"
            },

            {
                "name": "Banana",
                "step": "3"
            },
            {
                "name": "Granola",
                "step": "3"
            },
            {
                "name": "Amendoim",
                "step": "3"
            },
            {
                "name": "Leite em Pó",
                "step": "3"
            },
            {
                "name": "Farinha Láctea",
                "step": "3"
            },
            {
                "name": "Farinha de Biscoito",
                "step": "3"
            },

            {
                "name": "Leite Condensado",
                "step": "4"
            },
            {
                "name": "Calda de Chocolate",
                "step": "4"
            },
            {
                "name": "Calda de Morango",
                "step": "4"
            },
            {
                "name": "Calda de Menta",
                "step": "4"
            },
            {
                "name": "Calda de Kiwi",
                "step": "4"
            },
            {
                "name": "Calda de Uva",
                "step": "4"
            },
        ]

        // Criar produtos usando os dados fornecidos
        for (const data of ingredientsData) {
            await prisma.ingredient.create({
                data: {
                    name: data.name,
                    step: data.step,
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
