const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function seedDatabase() {
    try {
        const productData = [
            {
                name: "Líder Mini - Açaí 200ml",
                description: "Pote de 200 ml com Açaí Tradicional completo com 5 acompanhamentos e 1 calda e 1 camada de recheio: banana, granola, leite em pó, Farinha Láctea, amendoim e leite condensado.",
                imageUrl:"https://lh3.googleusercontent.com/pw/AP1GczPbfk9Qh2cqi42plxBBMcSB2tgEMHPtKYaPHLbpF6su2nO_LXoFiCIbtZkmXfRS-ybji1XOYMqqv58jE92R_jgmcAuebYuZvfxYzO0N-Wzm10r8MM2Yg4T3VsBVAnpbz2ESF1kgjKdiT100MUm4cuwM=w630-h919-s-no-gm?authuser=0",
            },
            {
                name: "Líder Pp - 250ml",
                description: "Delicie-se com o nosso 'Líder Pp - 250 ml', uma maravilha gastronômica da categoria 'Monte o seu pote'. Este prato requintado apresenta uma harmoniosa combinação de dois tipos de cremes luxuosos, seis acompanhamentos saborosos e dois tons de caldas sedutoras, todas meticulosamente finalizadas com duas camadas generosas de recheios tentadores, preparadas para você saborear com todo o amor.",
                imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczOeMdHVM0GCooCJUm_pT42bvz77JylCu77_KpzyaOePaIYBmIrgxzeJEO_KA8AelsSeViFD6J_aUvDjevoM5MvU7R5UyAihoQtl4cW_rbVBAjSWI4vLMNQKIDL-Me6QmueFzJtwLSgWWPkzieH3zNR2=w602-h452-s-no-gm?authuser=0",
            },
            {
                name: "Líder P - 350ml",
                description: "Descubra uma experiência gastronômica única com o 'Líder P - 350 Ml', pertencente à cativante categoria 'Monte o seu pote'. Este prato é cuidadosamente preparado com dois tipos de cremes suaves e sedosos, acompanhados por seis toppings variados, que proporcionam uma mistura de texturas e sabores incríveis. A decoração é concluída com dois tons de caldas deliciosamente doces, finalizado com duas camadas de recheios irresistíveis, criando uma combinação perfeita para você saborear com muito amor e apreciação. ",
                imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczM0mNmhLVo-Qc_SB8ZQxP3mtU7rtjSaYbLCWP3KTFlKBiGaBikgFgumyXVlFxvPaw07sfdFSp5DrwerEQivk4eE3jjWzjeLykyO0QQGcVTgFSS4w5N9rFoZlege_BNuElLTFH_g8etryGLtcPp_arc9=w921-h919-s-no-gm?authuser=0"
            },
            {
                name: "Líder M - 500ml",
                description: "Delicie-se com o 'Líder M - 500 Ml', uma seleção premium da categoria 'Monte o seu pote'. Este prato consiste em dois tipos de cremes luxuosamente suaves, acompanhados por seis extras distintos para um sabor único. Duas nuances de caldas harmoniosamente misturadas são derramadas por cima, finalizando com três camadas de recheios irresistíveis que você vai saborear com prazer.",
                imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczML-vpzTqi-xFIvgGavsXxJoMZ92jvAuCNwiHm0Um8yk2-iGQdivPLo9vh2j_1Bfpb7ySfMe9koRV8DXa7UnqU81s3sGqZrUAg_nvQ_SuV-kcdvACuXJK-soj-3x5DqRgmmDtlkUWTcySWWsrNbA1yO=w1000-h919-s-no-gm?authuser=0",
            },
            {
                name: "Líder Copo Premium - 550ml",
                description: "Escolha até 2 tipos de Cremes, 5 toppings premium's e 2 tipos de caldas finalizado com 3 camadas de recheio. Hummmmm venha provar dessa delícia!!",
                imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczPVwEL4mDM6SkwbyiW5A9Z8_KJkzlB3SosMJnq8F_S0O43ZSOp3NPmgfKZ1I0s-vEo7wuZyXPOBNHbW2gtN2aL4N1X4qj5B5N_y5vqaYRwSk_vRZ9Fd3XJOvj1r8Vnv7VNAFj_OBnTI5ZTvn5-z29Ur=w530-h518-s-no-gm?authuser=0",
            },
            {
                name: "Líder G - 750ml",
                description: "Apresentamos o 'Líder G - 750 Ml', uma opulenta seleção da categoria 'Monte o seu pote'. Este prato oferece uma combinação luxuosa de dois tipos de cremes suaves, seis acompanhamentos diversificados, harmoniosamente realçados por dois tons de caldas. A finalização é uma experiência em si, composta por três camadas de recheios indulgentes, concebida para ser saboreada com alegria.",
                imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczOpeLHUymp1KEZ5nukt80q0rDKEpcD4yD9bQqfiDqLHRGf1tehci-QNJCyZDKdDz0pgIiL2sRyMQFc2leyFSplEschQKDnsD8HylwQ5ah7RY26kKNTUxDclZLIrzSkAYLT6zL4a4EVyiJtZuM0jUbnS=w602-h546-s-no-gm?authuser=0",
            },
            {
                name: "Líder GG - 1000ml",
                description: "Delicie-se com o 'Líder Gg - 1 Litro', um prato especialmente criado para a categoria 'Monte o seu pote'. Este prato é uma combinação sublime de 2 variações de cremes sedosos, acompanhados por 6 ingredientes complementares cuidadosamente selecionados. A experiência culinária é aprimorada com 2 tons de caldas doces e finalizada com 3 camadas de recheios requintados, tudo preparado para você saborear com muito amor.",
                imageUrl: "https://lh3.googleusercontent.com/pw/AP1GczPYIRsFPMW_Rsgpn1bJBigYKSpVjpa5yg4e7-RyTjuPlGQdT9C9Hgcj2yiWT4qwPB6o_REnpApECpfVMH_B6dtjGxK-1h-KGXQgM75G_5GFwKL35A4joIMHsaOLT5RztJbMiUwdRWlU_AFx1JUS95jr=w1043-h919-s-no-gm?authuser=0",
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
