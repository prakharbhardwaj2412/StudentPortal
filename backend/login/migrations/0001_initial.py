# Generated by Django 2.2 on 2020-08-14 19:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LoginCred',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('library_id', models.CharField(max_length=10)),
                ('password', models.CharField(default='123456', max_length=10)),
            ],
        ),
    ]
